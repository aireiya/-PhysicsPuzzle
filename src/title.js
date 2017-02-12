
var title = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        //var label = cc.LabelTTF.create("GameOver", "Arial", 40);
        //label.setPosition(size.width / 2, size.height / 2);
        //this.addChild(label, 1);

        //------------BGM---------

        audioEngine = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
          //audioEngine.playMusic("res/bgm_main.mp3", true);
          audioEngine.playMusic(res.main_mp3, true);
        }


        //背景
        this.scroll_gb = new Scroll_BG(this);


        var title = cc.Sprite.create(res.title_png);　
        title.setPosition(size.width * 0.5, size.height * 0.7);
        this.addChild(title);

        //スタート
        label03 = cc.LabelTTF.create("クリックでスタート!", "Arial", 30);
        label03.setColor(cc.color(255, 0, 0, 128));
        this.addChild(label03); //文字つける時はこっち
        label03.setPosition(size.width * 0.5,size.height * 0.2, 15);

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
        return true;
      },
      onTouchMoved: function(touch, event) {},
      onTouchEnded: function(touch, event) {
        //エフェクト
        //audioEngine.playEffect(res.se02_mp3);
        // 次のシーンに切り替える
        var a = cc.TransitionFade.create(2.0, new StageSelectScene());
        cc.director.runScene(a);
      },
});

var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(140, 200, 140, 128));
        this.addChild(backgroundLayer);

        var layer1 = new title();
        this.addChild(layer1);
    }
});
