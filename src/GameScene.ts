/**
 *
 * @author 
 *
 */
class GameScene extends egret.Sprite {
    public hongbaoScene;
    public startScene;
    public endScene;
    public chaiScene;
    private moneyText: egret.TextField;
    private timeText: egret.TextField;
    private gameTimer: egret.Timer;
    public constructor() {
        super();
        this.init();
    }
	/**
	 * 初始化
	 */
    public init() {
        this.hongbaoScene = new HongBaoScene(this);
        this.startScene = new StartScene(this);
        this.gameTimer = new egret.Timer(1000,0);
        this.gameTimer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        GameData.GAME_STATE = GameData.GAME_START;
    }
    /**
     * 开始游戏
     */
    public startGame() {
        var sound: egret.Sound = RES.getRes("button");
        sound.play(0,1);
        this.initText();
        GameData.currentTime = GameData.GameTime;
        this.removeChild(this.startScene);
        this.hongbaoScene.startGame();
        this.gameTimer.start();
        GameData.GAME_STATE = GameData.GAME_QIANG;
    }
    /**
     * 显示结算
     */
    public endGame() {
        var sound: egret.Sound = RES.getRes("victory");
        sound.play(0,1);
        this.removeChild(this.chaiScene);
        this.endScene = new EndScene(this);
        GameData.GAME_STATE = GameData.GAME_END;
    }
    /**
     *  重新开始
     */
    public againGame() {
        var sound: egret.Sound = RES.getRes("button");
        sound.play(0,1);
        this.initText();
        GameData.currentTime = GameData.GameTime;
        this.removeChild(this.endScene);
        this.hongbaoScene.startGame();
        this.gameTimer.start();
        GameData.GAME_STATE = GameData.GAME_QIANG;
    }

    public refreshMoney() {
        this.moneyText.text = GameData.moneys.length + "个";
    }
    public refreshTime() {
        this.timeText.text = GameData.currentTime + "S";
    }
    private timerFunc(event: egret.TimerEvent) {

        if(GameData.currentTime <= 0) {
            this.chaiGame();
            return;
        }
        GameData.currentTime -= 1;
        this.refreshTime();
    }
    /**
     * 拆红包
     */
    public chaiGame() {
        GameData.all_money = 0;
        GameData.hongba_num = GameData.moneys.length;
        GameData.chai_num = GameData.moneys.length;
        this.removeChild(this.moneyText);
        this.removeChild(this.timeText);
        this.gameTimer.stop();
        this.hongbaoScene.endGame();
        this.chaiScene = new ChaiScene(this);
        GameData.GAME_STATE = GameData.GAME_CHAI;
    }

    public initText() {
        this.moneyText = new egret.TextField();
        this.moneyText.textAlign = egret.HorizontalAlign.CENTER;
        this.moneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.moneyText.background = true;
        this.moneyText.backgroundColor = 0xfaa755;
        this.moneyText.border = true;
        this.moneyText.borderColor = 0xffffff;
        this.moneyText.fontFamily = "Arial";
        this.moneyText.textColor = 0x822810;
        this.moneyText.size = 30;
        this.moneyText.text = GameData.moneys.length + "个";
        this.moneyText.width = 120;
        this.moneyText.height = 40;
        this.moneyText.x = GameData.getBgWidth() - this.moneyText.width - 20;
        this.moneyText.y = 20;
        this.addChild(this.moneyText);


        this.timeText = new egret.TextField();
        this.timeText.textAlign = egret.HorizontalAlign.CENTER;
        this.timeText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.timeText.background = true;
        this.timeText.backgroundColor = 0xfaa755;
        this.timeText.border = true;
        this.timeText.borderColor = 0xffffff;
        this.timeText.fontFamily = "Arial";
        this.timeText.textColor = 0x822810;
        this.timeText.size = 30;
        this.timeText.text = GameData.GameTime + "S";
        this.timeText.width = 120;
        this.timeText.height = 40;
        this.timeText.x = GameData.getBgWidth() - this.moneyText.width - this.timeText.width - 40;
        this.timeText.y = 20;
        this.addChild(this.timeText);
    }
}
