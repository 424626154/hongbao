/**
 *
 * @author 
 *
 */
class GameData {
	public constructor() {
	}
    private static bgWidth: number = 0;   //屏幕宽度
    private static bgHeight: number = 0;  //屏幕高度
    public static hongbao_w = 80;
    public static hongbao_h = 140;
    public static timer_time = 600;
    public static moneys = new Array<number>();
    public static GameTime = 10;
    public static currentTime = 0;
    public static all_money = 0;//所有money
    public static hongba_num = 0;//红包个数
    public static chai_num = 0;//需要拆的红包数量
    
    public static GAME_STATE = 0;//游戏状态
    public static GAME_START = 1;//开始游戏
    public static GAME_QIANG = 2;//抢红包
    public static GAME_CHAI = 3;//拆红包
    public static GAME_END = 4;//游戏结束
    /**
    * 屏幕宽度
    */
    public static getBgWidth(): number {
        if(GameData.bgWidth == 0) {
            GameData.bgWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return GameData.bgWidth;
    }
    /**
    * 屏幕高度
    */
    public static getBgHeight(): number {
        if(GameData.bgHeight == 0) {
            GameData.bgHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return GameData.bgHeight;
    }
    public static random(min,max): number {
        return Math.floor(min + Math.random() * (max - min));
            }
}
