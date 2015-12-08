/**
 *
 * @author 
 *
 */
class EndScene extends egret.Sprite {
    public gameScene: GameScene;
    private end: egret.Sprite;
    private gui: egret.Sprite;
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
        this.end = new egret.Sprite();
        this.addChild(this.end);
        this.end.width = chai_r * 2;
        this.end.height = chai_r * 2;
        this.end.graphics.beginFill(0xfaa755);
        this.end.graphics.drawCircle(chai_r,chai_r,chai_r);
        this.end.graphics.endFill();
        this.end.x = chat_x;
        this.end.y = chai_y;
        var chaiText: egret.TextField = new egret.TextField();
        chaiText.textAlign = egret.HorizontalAlign.CENTER;
        chaiText.verticalAlign = egret.VerticalAlign.MIDDLE;
        chaiText.fontFamily = "Arial";
        chaiText.textColor = 0xffffff;
        chaiText.size = 40;
        chaiText.text = "重新开始";
        chaiText.width = chai_r * 2;
        chaiText.height = chai_r * 2;
        chaiText.x = 0;
        chaiText.y = 0;
        this.end.addChild(chaiText);
        this.end.touchEnabled = true;
        this.end.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikSatrt,this);
        
        var end_text = "你一共抢了"+GameData.hongba_num +"个红包共计"+GameData.all_money.toFixed(2)+"元";
        var showTimerText = new egret.TextField();
        showTimerText.textAlign = egret.HorizontalAlign.CENTER;
        showTimerText.verticalAlign = egret.VerticalAlign.MIDDLE;
        showTimerText.fontFamily = "Arial";
        //        showTimerText.textColor = 0xff0000;
        showTimerText.size = 30;
        showTimerText.text = end_text;
        showTimerText.width = hongbao_w-20;
        showTimerText.x = (GameData.getBgWidth()-hongbao_w+20)/2;
        showTimerText.y = start_y+160;
        this.addChild(showTimerText);
        
        if(GameData.share_gui){ 
            GameData.GAME_STATE = GameData.GAME_SHARE;
//            egret.log(GameData.GAME_STATE);
            this.gui = new egret.Sprite();
            this.addChild(this.gui);
            this.gui.graphics.beginFill(0x000000,0.5);
            this.gui.graphics.drawRect(0,0,GameData.getBgWidth(),GameData.getBgHeight());
            this.gui.graphics.endFill();
            var img:egret.Bitmap = new egret.Bitmap();
            img.texture = RES.getRes("arrow");
            img.x = GameData.getBgWidth() - 50;
            this.gui.addChild(img);
                    
            var shareText = new egret.TextField();
            shareText.textAlign = egret.HorizontalAlign.CENTER;
            shareText.verticalAlign = egret.VerticalAlign.MIDDLE;
            shareText.fontFamily = "Arial";
            shareText.textColor = 0xffffff;
            shareText.size = 30;
            shareText.text = "分享到朋友圈，看看谁更厉害";
            shareText.width = GameData.getBgWidth()-20;
            shareText.x = 0;
            shareText.y = 80;
            this.gui.addChild(shareText);
            
            var gotit = new egret.TextField();
            gotit.textAlign = egret.HorizontalAlign.CENTER;
            gotit.verticalAlign = egret.VerticalAlign.MIDDLE;
            gotit.fontFamily = "Arial";
            gotit.textColor = 0xffffff;
            gotit.size = 60;
            gotit.text = "知道了";
            gotit.width = GameData.getBgWidth()-20;
            gotit.x = (GameData.getBgWidth()-gotit.width)/2;
            gotit.y = (GameData.getBgHeight()-gotit.height)/2;
            this.gui.addChild(gotit);
            gotit.touchEnabled = true;
            gotit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikGui,this);
            GameData.share_gui = false;
        }
    }
    public onclikSatrt() {
//        egret.log(GameData.GAME_STATE);
        if(GameData.GAME_STATE != GameData.GAME_END){ 
            return;
        }
//        egret.log("onclikSatrt");
        this.gameScene.againGame();
    }
    public onclikGui() { 
//        egret.log(GameData.GAME_STATE);
        if(GameData.GAME_STATE != GameData.GAME_SHARE){ 
            return;
        }
        GameData.GAME_STATE = GameData.GAME_END;
//        egret.log("onclikGui");
        this.removeChild(this.gui);
    }
}
