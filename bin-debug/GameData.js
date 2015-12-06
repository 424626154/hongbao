/**
 *
 * @author
 *
 */
var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData;p=c.prototype;
    /**
    * 屏幕宽度
    */
    GameData.getBgWidth = function () {
        if (GameData.bgWidth == 0) {
            GameData.bgWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return GameData.bgWidth;
    };
    /**
    * 屏幕高度
    */
    GameData.getBgHeight = function () {
        if (GameData.bgHeight == 0) {
            GameData.bgHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return GameData.bgHeight;
    };
    GameData.random = function (min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };
    GameData.bgWidth = 0; //屏幕宽度
    GameData.bgHeight = 0; //屏幕高度
    GameData.hongbao_w = 80;
    GameData.hongbao_h = 140;
    GameData.timer_time = 1000;
    GameData.moneys = new Array();
    return GameData;
})();
egret.registerClass(GameData,"GameData");
