function Player() {
	this.x = 200;
	this.y = 200;
	this.radius = 16;
	this.veloX = 0;
	this.veloY = 0;
	this.maxSpeed = 0.35;
	this.accMag = 0.007;
	this.frictionMag = this.accMag / 2;
	this.angle = 0;
	this.health = 5;
	
	this.draw = function() {
		// player gun
		canvas2d.save();
		canvas2d.translate(this.x + this.radius, this.y + this.radius);
		canvas2d.rotate(this.angle);
		canvas2d.fillStyle = "blue";
		canvas2d.fillRect(0, -5, 30, 10);
		canvas2d.restore();
		/*--------------------*/
		// player body
		canvas2d.beginPath();
		canvas2d.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
		canvas2d.fillStyle = "red";
		canvas2d.fill();
		canvas2d.closePath();
		/*--------------------*/
			};
	this.update = function(dt) {
		// adding acceleration to velocity
		var accX = 0, accY = 0;
		if(lkey && !rkey && !ukey && !dkey) {
			accX = -this.accMag;
		}
		else if(!lkey && rkey && !ukey && !dkey) {
			accX = this.accMag;
		}
		else if(!lkey && !rkey && ukey && !dkey) {
			accY = -this.accMag;
		}
		else if(!lkey && !rkey && !ukey && dkey) {
			accY = this.accMag;
		}
		else if(lkey && !rkey && ukey && !dkey) {
			var angle = Math.PI + Math.PI / 4;
			accX = this.accMag * Math.cos(angle);
			accY = this.accMag * Math.sin(angle);
		}
		else if(lkey && !rkey && !ukey && dkey) {
			var angle = Math.PI - Math.PI / 4;
			accX = this.accMag * Math.cos(angle);
			accY = this.accMag * Math.sin(angle);
		}
		else if(!lkey && rkey && ukey && !dkey) {
			var angle = -Math.PI / 4;
			accX = this.accMag * Math.cos(angle);
			accY = this.accMag * Math.sin(angle);
		}
		else if(!lkey && rkey && !ukey && dkey) {
			var angle = Math.PI / 4;
			accX = this.accMag * Math.cos(angle);
			accY = this.accMag * Math.sin(angle);
		}
		this.veloX += accX * dt;
		this.veloY += accY * dt;
		/*----------------------*/
		// adding friction to velocity
		if(this.veloX != 0 || this.veloY != 0) {
			if(this.veloX != 0 && this.veloY == 0) {
				if(this.veloX < 0) {
					this.veloX += this.frictionMag * dt;
					if(this.veloX > 0) {
						this.veloX = 0;
					}
				}
				else if(this.veloX > 0) {
					this.veloX -= this.frictionMag * dt;
					if(this.veloX < 0) {
						this.veloX = 0;
					}
				}
			}
			else if(this.veloY != 0 && this.veloX == 0) {
				if(this.veloY < 0) {
					this.veloY += this.frictionMag * dt;
					if(this.veloY > 0) {
						this.veloY = 0;
					}
				}
				else if(this.veloY > 0) {
					this.veloY -= this.frictionMag * dt;
					if(this.veloY < 0) {
						this.veloY = 0;
					}
				}
			}
			else {
				var veloAngle = Math.atan2(this.veloY, this.veloX);
				var frictionX = this.frictionMag * Math.cos(veloAngle + Math.PI);
				var frictionY = this.frictionMag * Math.sin(veloAngle + Math.PI);
				var prevVeloX = this.veloX;
				var prevVeloY = this.veloY;
				this.veloX += frictionX * dt;
				this.veloY += frictionY * dt;
				if((this.veloX > 0 && prevVeloX < 0) || (this.veloX < 0 && prevVeloX > 0)) {
					this.veloX = 0;
				}
				if((this.veloY > 0 && prevVeloY < 0) || (this.veloY < 0 && prevVeloY > 0)) {
					this.veloY = 0;
				}
			}
		}
		/*----------------------*/
		// making velocity component = 0 at edges
		if(this.veloX < 0 && this.x == 0) {
			this.veloX = 0;
		}
		if(this.veloX > 0 && this.x == canvas.width - this.radius * 2) {
			this.veloX = 0;
		}
		if(this.veloY < 0 && this.y == 0) {
			this.veloY = 0;
		}
		if(this.veloY > 0 && this.y == canvas.height - this.radius * 2) {
			this.veloY = 0
		}
		/*----------------------*/
		// capping velocity if max-speed crossed
		var speed = Math.sqrt(this.veloX * this.veloX + this.veloY * this.veloY);
		if(speed > this.maxSpeed) {
			if(this.veloX != 0 && this.veloY == 0) {
				if(this.veloX < 0) {
					this.veloX = -this.maxSpeed;
				}
				else if(this.veloX > 0) {
					this.veloX = this.maxSpeed;
				}
			}
			else if(this.veloY != 0 && this.veloX == 0) {
				if(this.veloY < 0) {
					this.veloY = -this.maxSpeed;
				}
				else if(this.veloY > 0) {
					this.veloY = this.maxSpeed;
				}
			}
			else {
				var veloAngle = Math.atan2(this.veloY, this.veloX);
				this.veloX = this.maxSpeed * Math.cos(veloAngle);
				this.veloY = this.maxSpeed * Math.sin(veloAngle);
			}
		}
		/*----------------------*/
		// adding velocity to position
		this.x += this.veloX * dt;
		if(this.x < 0) {
			this.x = 0;
		}
		if(this.x + this.radius * 2 > canvas.width) {
			this.x = canvas.width - this.radius * 2;
		}
		this.y += this.veloY * dt;
		if(this.y < 0) {
			this.y = 0;
		}
		if(this.y + this.radius * 2 > canvas.height) {
			this.y = canvas.height - this.radius * 2;
		}
		/*----------------------*/	
		// setting the angle of the gun
		var vectorX = mouseX - (this.x + this.radius);
		var vectorY = mouseY - (this.y + this.radius);
		this.angle = Math.atan2(vectorY, vectorX);
		/*----------------------*/
		// adding bullets
		if(mouseClicked) {
			playerBulletList.push(new Bullet(this.x + this.radius, this.y + this.radius, this.angle, "white"));
			shoot.currentTime = 0;
			shoot.play();
		}
		/*----------------------*/
	};
};
