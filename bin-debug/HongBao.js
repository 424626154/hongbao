/**
 *
 * @author
 *
 */
var HongBao = (function (_super) {
    __extends(HongBao, _super);
    function HongBao(x, y, rotation, money, hongbaoScene) {
        _super.call(this);
        this.hongbaoScene = hongbaoScene;
        this.init_x = x;
        this.init_y = y;
        this.init_rotation = rotation;
        this.money = money;
        this.init();
    }
    var d = __define,c=HongBao;p=c.prototype;
    p.init = function () {
        this.hongbaoScene.addChild(this);
        this.rect = new egret.Shape();
        this.rect.graphics.beginFill(0xfe0000);
        this.rect.graphics.drawRoundRect(0, 0, GameData.hongbao_w, GameData.hongbao_h, 4, 4);
        this.rect.graphics.endFill();
        this.addChild(this.rect);
        this.rect.graphics.lineStyle(2, 0xffffff);
        this.rect.graphics.moveTo(0, 0);
        this.rect.graphics.lineTo(10, 10);
        this.rect.graphics.endFill();
        this.rect.graphics.lineStyle(2, 0xffffff);
        this.rect.graphics.moveTo(GameData.hongbao_w, 0);
        this.rect.graphics.lineTo(GameData.hongbao_w - 10, 10);
        this.rect.graphics.endFill();
        this.rect.graphics.lineStyle(2, 0xffffff);
        this.rect.graphics.moveTo(10, 10);
        this.rect.graphics.lineTo(GameData.hongbao_w - 10, 10);
        this.rect.graphics.endFill();
        this.addChild(this.rect);
        var hong = new egret.TextField();
        hong.textAlign = egret.HorizontalAlign.CENTER;
        hong.verticalAlign = egret.VerticalAlign.MIDDLE;
        hong.fontFamily = "Arial";
        hong.textColor = 0xfaf714;
        hong.size = 30;
        hong.text = "红";
        hong.width = GameData.hongbao_w;
        hong.y = 40;
        this.addChild(hong);
        var bao = new egret.TextField();
        bao.textAlign = egret.HorizontalAlign.CENTER;
        bao.verticalAlign = egret.VerticalAlign.MIDDLE;
        bao.fontFamily = "Arial";
        bao.textColor = 0xfaf714;
        bao.size = 30;
        bao.text = "包";
        bao.width = GameData.hongbao_w;
        bao.y = hong.y + hong.height + 10;
        this.addChild(bao);
        this.x = this.init_x;
        this.y = -GameData.hongbao_h - this.init_y;
        //        egret.log(this.y);
        this.rotation = this.init_rotation;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclik, this);
        this.move();
    };
    p.onclik = function () {
        if (GameData.GAME_STATE != GameData.GAME_QIANG) {
            return;
        }
        var sound = RES.getRes("stick_grow_loop");
        sound.play(0, 1);
        //        egret.log("onclik");
        egret.Tween.removeTweens(this);
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onScaleChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ scaleX: 1.2, scaleY: 1.2 }, 200) //设置2000毫秒内 rotation 属性变为90
            .wait(10) //设置等待1000毫秒
            .call(this.onScaleComplete, this);
    };
    p.move = function () {
        var move_time = 1000 + (-this.y) * 10;
        //创建 Tween 对象
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onMoveChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ y: GameData.getBgHeight() }, move_time) //设置2000毫秒内 rotation 属性变为90
            .wait(500) //设置等待1000毫秒
            .call(this.onMoveComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onMoveChange = function () {
    };
    p.onMoveComplete = function () {
        this.hongbaoScene.removeChild(this);
    };
    p.onScaleChange = function () {
    };
    p.onScaleComplete = function () {
        this.hongbaoScene.removeChild(this);
        GameData.moneys.push(this.money);
        this.hongbaoScene.gameScene.refreshMoney();
    };
    return HongBao;
})(egret.Sprite);
egret.registerClass(HongBao,"HongBao");
