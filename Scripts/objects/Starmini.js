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
    var Starmini = /** @class */ (function (_super) {
        __extends(Starmini, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Starmini() {
            var _this = _super.call(this, "starmini") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Starmini.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Starmini.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Starmini.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Starmini.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * (config.Screen.WIDTH - this.width) + this.halfWidth);
        };
        return Starmini;
    }(objects.GameObject));
    objects.Starmini = Starmini;
})(objects || (objects = {}));
//# sourceMappingURL=Starmini.js.map