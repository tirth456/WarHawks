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
    var Meteroid = /** @class */ (function (_super) {
        __extends(Meteroid, _super);
        /**
         * Creates an instance of asteroid.
         * @memberof asteroid
         */
        function Meteroid() {
            var _this = _super.call(this, "meteroid") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Meteroid.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Meteroid.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Meteroid.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Meteroid.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 5 + 10); // between 5 and 10 ppf
            this.y = -this.height;
            this.x = Math.floor(Math.random() * (config.Screen.WIDTH - this.width) + this.halfWidth);
        };
        return Meteroid;
    }(objects.GameObject));
    objects.Meteroid = Meteroid;
})(objects || (objects = {}));
//# sourceMappingURL=Meteroid.js.map