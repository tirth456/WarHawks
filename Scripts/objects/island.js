var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var objects;
(function(objects) {
  var starmini = /** @class */ (function(_super) {
    __extends(starmini, _super);
    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    function starmini() {
      var _this = _super.call(this, "starmini") || this;
      _this.Start();
      return _this;
    }
    // private methods
    starmini.prototype._checkBounds = function() {
      // check bottom boundary
      if (this.y > config.Screen.HEIGHT + this.halfHeight) {
        this.Reset();
      }
    };
    // public methods
    starmini.prototype.Start = function() {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = 5;
      this.Reset();
    };
    starmini.prototype.Update = function() {
      this.y += this._verticalSpeed;
      this._checkBounds();
    };
    starmini.prototype.Reset = function() {
      this.y = -this.height;
      this.x = Math.floor(
        Math.random() * (config.Screen.WIDTH - this.width) + this.halfWidth
      );
    };
    return starmini;
  })(objects.GameObject);
  objects.starmini = starmini;
})(objects || (objects = {}));
//# sourceMappingURL=starmini.js.map
