/**
 *
 * @author 
 *
 */
class ChaiScene extends egret.Sprite {
    private gameScene: GameScene;
    private chai: egret.Sprite;
    private moneys = new Array<egret.TextField>();
    private skip = false;
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
        this.chai = new egret.Sprite();
        this.addChild(this.chai);
        this.chai.width = chai_r * 2;
        this.chai.height = chai_r * 2;
        this.chai.graphics.beginFill(0xfaa755);
        this.chai.graphics.drawCircle(chai_r,chai_r,chai_r);
        this.chai.graphics.endFill();
        this.chai.x = chat_x;
        this.chai.y = chai_y;
        var chaiText: egret.TextField = new egret.TextField();
        chaiText.textAlign = egret.HorizontalAlign.CENTER;
        chaiText.verticalAlign = egret.VerticalAlign.MIDDLE;
        chaiText.fontFamily = "Arial";
        chaiText.textColor = 0xffffff;
        chaiText.size = 50;
        chaiText.text = "拆红包";
        chaiText.width = chai_r * 2;
        chaiText.height = chai_r * 2;
        chaiText.x = 0;
        chaiText.y = 0;
        this.chai.addChild(chaiText);
        this.chai.touchEnabled = true;
        this.chai.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclik,this);
        if(GameData.chai_num == 0){ 
            this.skip = true;
        }
    }
    public onclik() {
        //        egret.log("onclik");
        if(GameData.GAME_STATE != GameData.GAME_CHAI) {
            return;
        }
        var sound: egret.Sound = RES.getRes("stick_grow_loop");
        sound.play(0,1);
        this.tweenMoney();

    }

    public tweenMoney() {
        if(GameData.chai_num <= 0) {
            if(this.skip){ 
                this.gameScene.endGame();
            }
            return;
        }
        GameData.chai_num -= 1;
        var money_num = GameData.moneys.pop() / 100;
        GameData.all_money += money_num;
        var money: egret.TextField = new egret.TextField();
        money.textAlign = egret.HorizontalAlign.CENTER;
        money.verticalAlign = egret.VerticalAlign.MIDDLE;
        money.fontFamily = "Arial";
        money.textColor = 0x000000;
        money.size = 50;
        money.text = money_num + "";
        money.x = this.chai.x + 100;
        money.y = this.chai.y + 100;
        money.width = 200;
        money.anchorOffsetX = money.width / 2;
        money.anchorOffsetY = money.height / 2;
        this.addChild(money);
        this.moneys.push(money);
        egret.Tween.get(money,{
            loop: false,//设置循环播放
            onChange: this.onScaleChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
            .to({ scaleX: 1.5,scaleY: 1.5,y: money.y - 100 },200)//设置2000毫秒内 rotation 属性变为90
            .wait(100)//设置等待1000毫秒
            .call(this.onScaleComplete,this);
    }

    public onScaleChange() {
    }
    public onScaleComplete() {
        var money = this.moneys[0];
        //        this.removeChild(money);
//        egret.log(money.stage);
        if(money.stage != null) {
            this.removeChild(money);
        }
        this.moneys.splice(0,1);
        if(GameData.chai_num <= 0) {
            this.gameScene.endGame();
        }
    }
}
