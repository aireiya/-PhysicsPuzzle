
var scorekari = 0;

var win = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();


        //BGM
        audioEngine.stopMusic();//前BGMの停止
        //音楽再生エンジン
        audioEngine = cc.audioEngine;

        if (!audioEngine.isMusicPlaying()) {
          //audioEngine.playMusic("res/bgm_main.mp3", true);
          audioEngine.playMusic(res.clear_mp3 , true);
        }

        //背景
        this.scroll_gb = new Scroll_BG(this);

        //ステージ選択へ
        var sentaku02 = cc.Sprite.create(res.sentaku_png);　
        sentaku02.setPosition(size.width * 0.5, size.height * 0.3);
        this.addChild(sentaku02);

        //レベルテキスト
        clear = cc.LabelTTF.create("レベル" + stage + "クリア!", "Arial", 40);
        clear.setColor(255,255,255);
        this.addChild(clear); //文字つける時はこっち*/
        clear.setPosition(size.width * 0.5,size.height * 0.85, 15);

        scorekari = score + Bonus;
        console.log("おじさｎ" + score);
        console.log("かり" + scorekari);

        //スコアテキスト
        score = cc.LabelTTF.create("スコア" + scorekari, "Arial", 40);
        score.setColor(255,255,255);
        this.addChild(score); //文字つける時はこっち*/
        score.setPosition(size.width * 0.5,size.height * 0.65, 15);


        // タップイベントリスナーを登録する
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                }, this);

        return true;
    },
      onTouchBegan: function(touch, event) {
        //■■■■■メニューに戻る■■■■■■■■■■■■■■■■■■■■■■■■■■
        if(touch.getLocation().y < 140 && touch.getLocation().y > 55 && touch.getLocation().x < 390 && touch.getLocation().x > 90 ){
          //console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
          var a = cc.TransitionFade.create(2.0, new StageSelectScene());
          cc.director.runScene(a);
        }

      },
      onTouchMoved: function(touch, event) {},
      onTouchEnded: function(touch, event) {
        // 次のシーンに切り替える
        //cc.director.runScene(new PowerSelectScene());
      },
});

var WinScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(140, 200, 140, 128));
        this.addChild(backgroundLayer);

        var layer1 = new win();
        this.addChild(layer1);
    }
});
