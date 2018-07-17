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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildasteroids = function () {
            for (var count = 0; count < this._asteroidNum; count++) {
                this._asteroids.push(new objects.Asteroid());
                //this._asteroids[count] = new objects.asteroid();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._plane = new objects.Plane();
            this._universe = new objects.universe();
            this._starmini = new objects.Starmini();
            this._meteroid = new objects.Meteroid();
            // creates an empty array of type asteroid
            this._asteroids = new Array();
            this._asteroidNum = 3;
            this._buildasteroids();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._plane.Update();
            this._universe.Update();
            this._starmini.Update();
            this._meteroid.Update();
            managers.Collision.check(this._plane, this._starmini);
            this._asteroids.forEach(function (asteroid) {
                asteroid.Update();
                managers.Collision.check(_this._plane, asteroid);
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the universe to the scene
            this.addChild(this._universe);
            // adding the starmini to the scene
            this.addChild(this._starmini);
            // adding the plane to the scene
            this.addChild(this._plane);
            // adding the asteroid to the scene
            for (var _i = 0, _a = this._asteroids; _i < _a.length; _i++) {
                var asteroid = _a[_i];
                this.addChild(asteroid);
            }
            this.addChild(this._meteroid);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map