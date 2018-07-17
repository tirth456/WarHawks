namespace objects {
  export class space_background extends createjs.Bitmap {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of universe.
     * @memberof universe
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("space_background"));

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (this.y >= 0) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._verticalSpeed = 5; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.y += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.y = -960;
    }
  }
}