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
    GameData.timer_time = 600;
    GameData.moneys = new Array();
    GameData.GameTime = 10;
    GameData.currentTime = 0;
    GameData.all_money = 0; //所有money
    GameData.hongba_num = 0; //红包个数
    GameData.chai_num = 0; //需要拆的红包数量
    GameData.GAME_STATE = 0; //游戏状态
    GameData.GAME_START = 1; //开始游戏
    GameData.GAME_QIANG = 2; //抢红包
    GameData.GAME_CHAI = 3; //拆红包
    GameData.GAME_END = 4; //游戏结束
    return GameData;
})();
egret.registerClass(GameData,"GameData");
