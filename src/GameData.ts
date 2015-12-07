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
    public static timer_time = 1000;
    public static moneys = new Array<number>();
    public static GameTime = 10;
    public static currentTime = 0;
    public static hongbaos = new Array<HongBao>();
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
