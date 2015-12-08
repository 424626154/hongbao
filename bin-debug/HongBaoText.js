/**
*
* @author
*
*/
var HongBaoText = (function (_super) {
    __extends(HongBaoText, _super);
    function HongBaoText(rotation, text) {
        _super.call(this);
        this.init_rotation = rotation;
        this.text = text;
        this.init();
    }
    var d = __define,c=HongBaoText;p=c.prototype;
    p.init = function () {
        this.rect = new egret.Shape();
        this.rect.graphics.beginFill(0xffffff);
        this.rect.graphics.drawRoundRect(0, 0, GameData.hongbao_w, GameData.hongbao_h, 4, 4);
        this.rect.graphics.endFill();
        this.rect.graphics.beginFill(0xfe0000);
        this.rect.graphics.drawRoundRect(1, 1, GameData.hongbao_w - 2, GameData.hongbao_h - 2, 4, 4);
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
        hong.size = 50;
        hong.text = this.text;
        hong.width = GameData.hongbao_w;
        hong.y = 40;
        this.addChild(hong);
        this.rotation = this.init_rotation;
        //        egret.log(this.text);
    };
    return HongBaoText;
})(egret.Sprite);
egret.registerClass(HongBaoText,"HongBaoText");
