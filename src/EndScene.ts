/**
 *
 * @author 
 *
 */
class EndScene extends egret.Sprite {
    public gameScene: GameScene;
    public constructor(gameScene: GameScene) {
        super();
        this.gameScene = gameScene;
        this.init();
    }
    public init() {
        this.gameScene.addChildAt(this,1000);
        var bg = new egret.Shape();
        this.addChild(bg);
        this.graphics.beginFill(0x000000,0.5);
        this.graphics.drawRect(0,0,GameData.getBgWidth(),GameData.getBgHeight());
        this.graphics.endFill();

        var start: egret.TextField = new egret.TextField();
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.verticalAlign = egret.VerticalAlign.MIDDLE;
        start.background = true;
        start.backgroundColor = 0xfaa755;
        start.border = true;
        start.borderColor = 0xffffff;
        start.fontFamily = "Arial";
        start.textColor = 0x822810;
        start.size = 30;
        start.text = "重新开始";
        start.width = 140;
        start.height = 60;
        start.x = (GameData.getBgWidth() - start.width) / 2;
        start.y = (GameData.getBgHeight() - start.height) / 2;
        this.addChild(start);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikSatrt,this);
        
        var end_text = "你一共抢了"+GameData.hongba_num +"个红包共计"+GameData.all_money.toFixed(2)+"元" ;
        var showTimerText = new egret.TextField();
        showTimerText.textAlign = egret.HorizontalAlign.CENTER;
        showTimerText.verticalAlign = egret.VerticalAlign.MIDDLE;
        showTimerText.fontFamily = "Arial";
        //        showTimerText.textColor = 0xff0000;
        showTimerText.size = 30;
        showTimerText.text = end_text;
        showTimerText.width = GameData.getBgWidth()-20;
        showTimerText.x = 0;
        showTimerText.y = 120;
        this.addChild(showTimerText);
    }
    public onclikSatrt() {
        this.gameScene.againGame();
    }
}
