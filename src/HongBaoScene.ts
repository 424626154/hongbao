/**
 *
 * @author 
 *
 */
class HongBaoScene extends egret.Sprite {
    public gameScene: GameScene;
    public timer: egret.Timer;
    public constructor(gameScene: GameScene) {
        super();
        this.gameScene = gameScene;
        this.init();
    }
    public init() {
        this.gameScene.addChild(this);
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffffff);
        rect.graphics.drawRect(0,0,GameData.getBgWidth(),GameData.getBgHeight());
        rect.graphics.endFill();
        this.addChild(rect);

        this.timer = new egret.Timer(GameData.timer_time,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);


    }
    private timerFunc(event: egret.TimerEvent) {
        this.randomHongBao();
    }
    public randomHongBao() {
        var num = GameData.random(2,5);
        //        egret.log(num);
        var range = GameData.getBgWidth() / num;
        for(var i = 0;i < num;i++) {
            var x = i * range + GameData.random(0,range - GameData.hongbao_w);
            var y = GameData.random(GameData.hongbao_h / 2,GameData.hongbao_h * 5);
            var money = GameData.random(0,GameData.hongbao_h * 5);
            //            egret.log(x);
            //            egret.log(i,y);
            var hongbao = new HongBao(x,y,0,money,this);
        }
    }



    public startGame() {
        GameData.moneys = new Array<number>();
        this.timer.start();
        this.randomHongBao();
    }
    public endGame() {
        this.timer.stop();
    }
    
    public clearHongbao() { 
        for(var i = 0;i < GameData.hongbaos.length;i++) {
            var hongbao = GameData.hongbaos[i];
            egret.log(hongbao);
            egret.Tween.removeTweens(hongbao);
            this.removeChild(hongbao);
        }
        GameData.hongbaos = new Array<HongBao>();
    }
}
