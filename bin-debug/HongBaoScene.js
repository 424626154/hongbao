/**
 *
 * @author
 *
 */
var HongBaoScene = (function (_super) {
    __extends(HongBaoScene, _super);
    function HongBaoScene(gameScene) {
        _super.call(this);
        this.gameScene = gameScene;
        this.init();
    }
    var d = __define,c=HongBaoScene;p=c.prototype;
    p.init = function () {
        this.gameScene.addChild(this);
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffffff);
        rect.graphics.drawRect(0, 0, GameData.getBgWidth(), GameData.getBgHeight());
        rect.graphics.endFill();
        this.addChild(rect);
        this.timer = new egret.Timer(GameData.timer_time, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    };
    p.timerFunc = function (event) {
        this.randomHongBao();
    };
    p.randomHongBao = function () {
        var num = GameData.random(2, 5);
        //        egret.log(num);
        var range = GameData.getBgWidth() / num;
        for (var i = 0; i < num; i++) {
            var x = i * range + GameData.random(0, range - GameData.hongbao_w);
            var y = GameData.random(GameData.hongbao_h / 2, GameData.hongbao_h * 5);
            var money = GameData.random(0, GameData.hongbao_h * 5);
            //            egret.log(x);
            //            egret.log(i,y);
            var hongbao = new HongBao(x, y, 0, money, this);
        }
    };
    p.startGame = function () {
        GameData.moneys = new Array();
        this.timer.start();
        this.randomHongBao();
    };
    p.endGame = function () {
        this.timer.stop();
    };
    p.clearHongbao = function () {
        for (var i = 0; i < GameData.hongbaos.length; i++) {
            var hongbao = GameData.hongbaos[i];
            egret.log(hongbao);
            egret.Tween.removeTweens(hongbao);
            this.removeChild(hongbao);
        }
        GameData.hongbaos = new Array();
    };
    return HongBaoScene;
})(egret.Sprite);
egret.registerClass(HongBaoScene,"HongBaoScene");
