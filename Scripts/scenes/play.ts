namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _plane: objects.Plane;
    private _universe: objects.universe;
    private _starmini: objects.Starmini;
    private _asteroids: objects.Asteroid[];
    private _asteroidNum: number;
    private _meteroid: objects.Meteroid;

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
      this._universe = new objects.universe();
      this._starmini = new objects.Starmini();
      this._meteroid = new objects.Meteroid();

      // creates an empty array of type asteroid
      this._asteroids = new Array<objects.Asteroid>();
      this._asteroidNum = 3;

      this._buildasteroids();

      this.Main();
    }

    public Update(): void {
      this._plane.Update();
      this._universe.Update();
      this._starmini.Update();
      this._meteroid.Update();

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

      // adding the universe to the scene
      this.addChild(this._universe);

      // adding the starmini to the scene
      this.addChild(this._starmini);

      // adding the plane to the scene
      this.addChild(this._plane);
      // adding the asteroid to the scene
      for (const asteroid of this._asteroids) {
        this.addChild(asteroid);
      }
      this.addChild(this._meteroid);
    }
  }
}
