
var stage = 1;

var select = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

/*
        //BGM
        audioEngine.stopMusic();//前BGMの停止
        //音楽再生エンジン
        audioEngine = cc.audioEngine;

        if (!audioEngine.isMusicPlaying()) {
          //audioEngine.playMusic("res/bgm_main.mp3", true);
          audioEngine.playMusic(res.select_mp3 , true);
        }*/

        //背景
        this.scroll_gb = new Scroll_BG(this);

        //セレクトアイコン
        back01 = cc.Layer.create();
        this.addChild(back01);
        bg01 = cc.Sprite.create(res.select01_png);
        back01.addChild(bg01, 0);
        bg01.setPosition(size.width * 0.1,size.height * 0.4, 15);

        back02 = cc.Layer.create();
        this.addChild(back02);
        bg02 = cc.Sprite.create(res.select02_png);
        back02.addChild(bg02, 0);
        bg02.setPosition(size.width * 0.3,size.height * 0.4, 15);

        back03 = cc.Layer.create();
        this.addChild(back03);
        bg03 = cc.Sprite.create(res.select03_png);
        back03.addChild(bg03, 0);
        bg03.setPosition(size.width * 0.5,size.height * 0.4, 15);

        back04 = cc.Layer.create();
        this.addChild(back04);
        bg04 = cc.Sprite.create(res.select04_png);
        back04.addChild(bg04, 0);
        bg04.setPosition(size.width * 0.7,size.height * 0.4, 15);

        back05 = cc.Layer.create();
        this.addChild(back05);
        bg05 = cc.Sprite.create(res.select05_png);
        back05.addChild(bg05, 0);
        bg05.setPosition(size.width * 0.9,size.height * 0.4, 15);

        //ステージ選択
        sel01 = cc.LabelTTF.create("ステージ選択", "Arial", 40);
        sel01.setColor(255,255,255);
        this.addChild(sel01); //文字つける時はこっち*/
        sel01.setPosition(size.width * 0.5,size.height * 0.8, 15);


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
        //■■■■■ステージ選択■■■■■■■■■■■■■■■■■■■■■■■■■■
        if(touch.getLocation().y < 160 && touch.getLocation().y > 90){
          console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
          //■■■■■ステージ1■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(touch.getLocation().x < 80 && touch.getLocation().x > 10  ){
            stage = 1;
            console.log("ステージ1選択");
          var a = cc.TransitionFade.create(2.0, new gameScene());
          cc.director.runScene(a);
          }

          //■■■■■ステージ2■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(touch.getLocation().x < 180 && touch.getLocation().x > 100){
            stage = 2;
            console.log("ステージ2選択");
          var a = cc.TransitionFade.create(2.0, new gameScene());
          cc.director.runScene(a);
          }

          //■■■■■ステージ3■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(touch.getLocation().x < 280 && touch.getLocation().x > 200){
            stage = 3;
            console.log("ステージ3選択");
          var a = cc.TransitionFade.create(2.0, new gameScene());
          cc.director.runScene(a);
        }
          //■■■■■ステージ4■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(touch.getLocation().x < 380 && touch.getLocation().x > 300){
            stage = 4;
            console.log("ステージ4選択");
          var a = cc.TransitionFade.create(2.0, new gameScene());
          cc.director.runScene(a);
        }
          //■■■■■ステージ5■■■■■■■■■■■■■■■■■■■■■■■■■■
          if(touch.getLocation().x < 480 && touch.getLocation().x > 400){
            stage = 5;
            console.log("ステージ5選択");
          var a = cc.TransitionFade.create(2.0, new gameScene());
          cc.director.runScene(a);
        }
        //エフェクト
        //audioEngine.playEffect(res.se02_mp3);
      }
      },
      onTouchMoved: function(touch, event) {},
      onTouchEnded: function(touch, event) {
        // 次のシーンに切り替える
        //cc.director.runScene(new PowerSelectScene());
      },
});

var StageSelectScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(140, 200, 140, 128));
        this.addChild(backgroundLayer);

        var layer1 = new select();
        this.addChild(layer1);
    }
});
