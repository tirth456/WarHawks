namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _plane: objects.Plane;
    private _ocean: objects.Universe;
    private _island: objects.Starmini;
    private _clouds: objects.Meteroid[];
    private _cloudNum: number;

    public engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildClouds(): void {
      for (let count = 0; count < this._cloudNum; count++) {
        this._clouds.push(new objects.Meteroid());
        //this._clouds[count] = new objects.Meteroid();
      }
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("engine");
      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._plane = new objects.Plane();
      this._ocean = new objects.Universe();
      this._island = new objects.Starmini();

      // creates an empty array of type Meteroid
      this._clouds = new Array<objects.Meteroid>();
      this._cloudNum = 3;

      this._buildClouds();

      this.Main();
    }

    public Update(): void {
      this._plane.Update();
      this._ocean.Update();
      this._island.Update();

      managers.Collision.check(this._plane, this._island);

      this._clouds.forEach(meteroid => {
        meteroid.Update();
        managers.Collision.check(this._plane, meteroid);
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.engineSound.stop();
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the universe to the scene
      this.addChild(this._ocean);

      // adding the starmini to the scene
      this.addChild(this._island);

      // adding the plane to the scene
      this.addChild(this._plane);

      // adding the meteroid to the scene
      for (const meteroid of this._clouds) {
        this.addChild(meteroid);
      }

      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);
    }
  }
}
