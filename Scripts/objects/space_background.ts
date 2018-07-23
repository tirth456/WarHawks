namespace objects {
  export class space_background extends createjs.Bitmap {
    // member variables

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
      this.Reset();
    }

    public Update(): void {
      this._checkBounds();
    }

    public Reset(): void {
      this.y = -960;
    }
  }
}
