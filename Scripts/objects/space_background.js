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
    var space_background = /** @class */ (function (_super) {
        __extends(space_background, _super);
        /**
         * Creates an instance of universe.
         * @memberof universe
         */
        function space_background() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("space_background")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        space_background.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        space_background.prototype.Start = function () {
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        space_background.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        space_background.prototype.Reset = function () {
            this.y = -960;
        };
        return space_background;
    }(createjs.Bitmap));
    objects.space_background = space_background;
})(objects || (objects = {}));
//# sourceMappingURL=space_background.js.map