/**
 *
 * @author
 *
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=GameScene;p=c.prototype;
    /**
     * 初始化
     */
    p.init = function () {
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffffff);
        rect.graphics.drawRect(0, 0, GameData.getBgWidth(), GameData.getBgHeight());
        rect.graphics.endFill();
        this.addChild(rect);
        this.timer = new egret.Timer(GameData.timer_time, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.start();
        this.randomHongBao();
        this.moneyText = new egret.TextField();
        this.moneyText.textAlign = egret.HorizontalAlign.CENTER;
        this.moneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.moneyText.background = true;
        this.moneyText.backgroundColor = 0xffffff;
        this.moneyText.border = true;
        this.moneyText.borderColor = 0x000000;
        this.moneyText.fontFamily = "Arial";
        this.moneyText.textColor = 0xff0000;
        this.moneyText.size = 30;
        this.moneyText.text = GameData.moneys.length + "个";
        this.moneyText.width = 120;
        this.moneyText.height = 40;
        this.moneyText.x = GameData.getBgWidth() - this.moneyText.width - 20;
        this.moneyText.y = 20;
        this.addChild(this.moneyText);
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
    p.refreshMoney = function () {
        this.moneyText.text = GameData.moneys.length + "个";
    };
    return GameScene;
})(egret.Sprite);
egret.registerClass(GameScene,"GameScene");
