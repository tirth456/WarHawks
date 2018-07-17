namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _plane: objects.Plane;
    private _ocean: objects.Ocean;
    private _starmini: objects.Starmini;
    private _asteroids: objects.Asteroid[];
    private _asteroidNum: number;

    public engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildasteroids(): void {
      for (let count = 0; count < this._asteroidNum; count++) {
        this._asteroids.push(new objects.Asteroid());
        //this._asteroids[count] = new objects.asteroid();
      }
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("engine");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._plane = new objects.Plane();
      this._ocean = new objects.Ocean();
      this._starmini = new objects.Starmini();

      // creates an empty array of type asteroid
      this._asteroids = new Array<objects.Asteroid>();
      this._asteroidNum = 3;

      this._buildasteroids();

      this.Main();
    }

    public Update(): void {
      this._plane.Update();
      this._ocean.Update();
      this._starmini.Update();

      managers.Collision.check(this._plane, this._starmini);

      this._asteroids.forEach(asteroid => {
        asteroid.Update();
        managers.Collision.check(this._plane, asteroid);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the ocean to the scene
      this.addChild(this._ocean);

      // adding the starmini to the scene
      this.addChild(this._starmini);

      // adding the plane to the scene
      this.addChild(this._plane);

      // adding the asteroid to the scene
      for (const asteroid of this._asteroids) {
        this.addChild(asteroid);
      }
    }
  }
}
