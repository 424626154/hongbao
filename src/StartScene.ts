/**
 *
 * @author 
 *
 */
class StartScene extends egret.Sprite {
    private gameScene: GameScene;
    private start: egret.Sprite;
    public constructor(gameScene: GameScene) {
        super();
        this.gameScene = gameScene;
        this.init();
    }
    public init() {
        this.gameScene.addChild(this);
        var bg = new egret.Shape();
        this.addChild(bg);
        this.graphics.beginFill(0x000000,0.5);
        this.graphics.drawRect(0,0,GameData.getBgWidth(),GameData.getBgHeight());
        this.graphics.endFill();
        var hongbao_w = 440;
        var hongbao_h = 680;
        var start_x = (GameData.getBgWidth() - hongbao_w) / 2;
        var start_y = (GameData.getBgHeight() - hongbao_h) / 2;
        var hongbaoBg = new egret.Shape();
        this.addChild(hongbaoBg);
        hongbaoBg.graphics.beginFill(0xfe0000);
        hongbaoBg.graphics.drawRoundRect(start_x,start_y,hongbao_w,hongbao_h,10,10);
        hongbaoBg.graphics.endFill();
        
        hongbaoBg.graphics.lineStyle(2,0xffffff);
        hongbaoBg.graphics.moveTo(start_x,start_y);
        hongbaoBg.graphics.lineTo(start_x + 40,start_y + 40);
        hongbaoBg.graphics.endFill();
        hongbaoBg.graphics.lineStyle(2,0xffffff);
        hongbaoBg.graphics.moveTo(start_x + hongbao_w,start_y);
        hongbaoBg.graphics.lineTo(start_x + hongbao_w - 40,start_y + 40);
        hongbaoBg.graphics.endFill();
        hongbaoBg.graphics.lineStyle(2,0xffffff);
        hongbaoBg.graphics.moveTo(start_x + 40,start_y + 40);
        hongbaoBg.graphics.lineTo(start_x + hongbao_w - 40,start_y + 40);
        hongbaoBg.graphics.endFill();
        
        
        var chai_r = 100;
        var chai_y = start_y + hongbao_h - 2 * chai_r - 120;
        var chat_x = GameData.getBgWidth() / 2 - chai_r;
        this.start = new egret.Sprite();
        this.addChild(this.start);
        this.start.width = chai_r * 2;
        this.start.height = chai_r * 2;
        this.start.graphics.beginFill(0xfaa755);
        this.start.graphics.drawCircle(chai_r,chai_r,chai_r);
        this.start.graphics.endFill();
        this.start.x = chat_x;
        this.start.y = chai_y;
        var chaiText: egret.TextField = new egret.TextField();
        chaiText.textAlign = egret.HorizontalAlign.CENTER;
        chaiText.verticalAlign = egret.VerticalAlign.MIDDLE;
        chaiText.fontFamily = "Arial";
        chaiText.textColor = 0xffffff;
        chaiText.size = 40;
        chaiText.text = "开始游戏";
        chaiText.width = chai_r * 2;
        chaiText.height = chai_r * 2;
        chaiText.x = 0;
        chaiText.y = 0;
        this.start.addChild(chaiText);
        this.start.touchEnabled = true;
        this.start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikSatrt,this);
        
        var qiang = new HongBaoText(-20,"抢"); 
        qiang.x = (GameData.getBgWidth()-GameData.hongbao_w)/2-100;
        qiang.y = chai_y-GameData.hongbao_h-40;
        this.addChild(qiang);
        var hong = new HongBaoText(0,"红"); 
        hong.x = (GameData.getBgWidth()-GameData.hongbao_w)/2;
        hong.y = chai_y-GameData.hongbao_h-60;
        this.addChild(hong);
        var bao = new HongBaoText(20,"包"); 
        bao.x = (GameData.getBgWidth()-GameData.hongbao_w)/2+100;
        bao.y = chai_y-GameData.hongbao_h-60;
        this.addChild(bao);
        
    }
    public onclikSatrt() {
        this.gameScene.startGame();
    }
}
