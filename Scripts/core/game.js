//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/StartButton.png" },
        { id: "NextButton", src: "/Assets/images/NextButton.png" },
        { id: "BackButton", src: "/Assets/images/BackButton.png" },
        { id: "plane", src: "/Assets/images/spaceship.png" },
        { id: "universe", src: "/Assets/images/background.png" },
        { id: "starmini", src: "/Assets/images/starmini.png" },
        { id: "asteroid", src: "/Assets/images/asteroid.png" },
        { id: "meteroid", src: "/Assets/images/meteroid.png" },
        { id: "yay", src: "/Assets/audio/yay.ogg" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "engine", src: "/Assets/audio/engine.ogg" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map