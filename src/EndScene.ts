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
        start.backgroundColor = 0xffffff;
        start.border = true;
        start.borderColor = 0x000000;
        start.fontFamily = "Arial";
        start.textColor = 0x000000;
        start.size = 30;
        start.text = "重新开始";
        start.width = 140;
        start.height = 60;
        start.x = (GameData.getBgWidth() - start.width) / 2;
        start.y = (GameData.getBgHeight() - start.height) / 2;
        this.addChild(start);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikSatrt,this)
    }
    public onclikSatrt() {
        this.gameScene.againGame();
    }
}
