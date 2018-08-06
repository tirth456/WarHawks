var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Universe = /** @class */ (function (_super) {
        __extends(Universe, _super);
        /**
         * Creates an instance of Universe.
         * @memberof Universe
         */
        function Universe() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("universe")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Universe.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Universe.prototype.Start = function () {
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        Universe.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Universe.prototype.Reset = function () {
            this.y = -960;
        };
        return Universe;
    }(createjs.Bitmap));
    objects.Universe = Universe;
})(objects || (objects = {}));
//# sourceMappingURL=Universe.js.map