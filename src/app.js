var space;
var shapeArray = [];
var objectArray = [];

var ClearDou = false;

if (typeof SpriteTag == "undefined") {
   var SpriteTag = {};
   SpriteTag.terrain = 1;

   SpriteTag.kieyuka = 2;
   SpriteTag.goal = 4;

   SpriteTag.monster1 = 8;
   SpriteTag.monster2 = 16;

   SpriteTag.player = 128;

};

var callbacks = [];
var PlayerStar_X = 140;

var Monjump = 0;

var abstouchX;
var abstouchY;

var jump = 10; //ジャンプ回数
var score = 0; //スコア
var Bonus = 1000; //ボーナス
var node; //矢印
var touchpl =false; //矢印の判定
var line = [];//矢印で使う
var fillcol = new cc.Color(255,255,255,128);//矢印で使う
var linecol = new cc.Color(10,200,10,128);  //矢印で使う

var BGMchange = true;
var playertouch = false;

var gameLayer;
var gameScene = cc.Scene.extend({
   onEnter: function() {
      this._super();

      var backgroundLayer = cc.LayerGradient.create(cc.color(0xdf, 0x9f, 0x83, 255), cc.color(0xfa, 0xf7, 0x9f, 255));
      this.addChild(backgroundLayer);

      space = new cp.Space();
      space.gravity = cp.v(0, -100);
      var debugDraw = cc.PhysicsDebugNode.create(space);
      debugDraw.setVisible(false); //物理演算デバッグモード
      this.addChild(debugDraw, 100);
/*
    //床を作る
      var wallBottom = new cp.SegmentShape(space.staticBody,
         cp.v(-4294967294, 1), // start point
         cp.v(4294967295, 1), // MAX INT:4294967295
         0); // thickness of wall
      space.addStaticShape(wallBottom);
*/
      gameLayer = new game();
      gameLayer.init();
      this.addChild(gameLayer);
   }
});

var game = cc.Layer.extend({
   player: null,
   scroll_gb: null,
   monster1: null,
   monster2: null,

   init: function() {
      this._super();

      ClearDou = false;

       this.scroll_gb = new Scroll_BG(this);
      var tiledmap = new Tiledmap(this);

      //this.player = new Player(this, PlayerStar_X, 188, SpriteTag.player);  //player.jsに飛んで仕事
      //◆◆◆モンスター出現◆◆◆
      //this.monster1 new Monster1(this, MonsterStar_X, 188, SpriteTag.monster1);  //monster.jsに飛んで仕事
      //this.monster2 new Monster2(this, MonsterStar_X, 188, SpriteTag.monster2);  //monster.jsに飛んで仕事
      //   var terrain  = new Terrain(this, 100,30,SpriteTag.terrain);
      //   var goal  = new Objects(this, 250,30,SpriteTag.goal);


              //BGM
              /*audioEngine.stopMusic();//前BGMの停止
              //音楽再生エンジン
              audioEngine = cc.audioEngine;

              if (!audioEngine.isMusicPlaying()) {
                //audioEngine.playMusic("res/bgm_main.mp3", true);
                audioEngine.playMusic(res.select_mp3 , true);
              }*/

              //スコア加算
              score = scorekari

      var size = cc.director.getWinSize();

      //矢印制作
      node = new cc.DrawNode();

      this.addChild(node, 2);

      //▲▲▲ステージごとのジャンプ回数、ボーナス配分
      switch(stage){
        case 1 : jump = 5;
                Bonus = 1000;
                this.player = new Player(this, 140, 205, SpriteTag.player);  //player.jsに飛んで仕事
                this.monster1 = new Monster1(this, 20, 220, SpriteTag.monster1);  //monster.jsに飛んで仕事
                this.monster2 = new Monster2(this, 20, 205, SpriteTag.monster2);  //monster.jsに飛んで仕事
        break;

        case 2 : jump = 5;
                Bonus = 2000;
                this.player = new Player(this, 50, 100, SpriteTag.player);  //player.jsに飛んで仕事
                this.monster1 = new Monster1(this, 160, 205, SpriteTag.monster1);  //monster.jsに飛んで仕事
                this.monster2 = new Monster2(this, 300, 305, SpriteTag.monster2);  //monster.jsに飛んで仕事
        break;

        case 3 : jump = 10;
                Bonus = 3000;
                this.player = new Player(this, 50, 150, SpriteTag.player);  //player.jsに飛んで仕事
                this.monster1 = new Monster1(this, 200, 150, SpriteTag.monster1);  //monster.jsに飛んで仕事
                this.monster2 = new Monster2(this, 100, 205, SpriteTag.monster2);  //monster.jsに飛んで仕事
        break;

        case 4 : jump = 10;
                Bonus = 4000;
                this.player = new Player(this, 250, 150, SpriteTag.player);  //player.jsに飛んで仕事
                this.monster1 = new Monster1(this, 395, 110, SpriteTag.monster1);  //monster.jsに飛んで仕事
                this.monster2 = new Monster2(this, 105, 110, SpriteTag.monster2);  //monster.jsに飛んで仕事
        break;

        case 5 : jump = 15;
                Bonus = 5000;
                this.player = new Player(this, 30, 60, SpriteTag.player);  //player.jsに飛んで仕事
                this.monster1 = new Monster1(this, 230, 205, SpriteTag.monster1);  //monster.jsに飛んで仕事
                this.monster2 = new Monster2(this, 30, 1000, SpriteTag.monster2);  //monster.jsに飛んで仕事
        break;
      }

      //テキスト
      label01 = cc.LabelTTF.create("レベル" + stage + "  スコア" + score + "  ボーナス" + Bonus, "Arial", 20);
      label01.setColor(255,255,255);
      this.addChild(label01); //文字つける時はこっち*/
      label01.setPosition(size.width * 0.5,size.height * 0.95, 15);

      label02 = cc.LabelTTF.create("残りジャンプ" + jump, "Arial", 20);
      label02.setColor(255,255,255);
      this.addChild(label02); //文字つける時はこっち*/
      label02.setPosition(size.width * 0.3,size.height * 0.85, 15);

      menu = cc.Sprite.create(res.menu_png);
      this.addChild(menu, 1);
      menu.setPosition(size.width * 0.6,size.height * 0.85);

      reset = cc.Sprite.create(res.reset_png);
      this.addChild(reset, 1);
      reset.setPosition(size.width * 0.75,size.height * 0.85);

      bgm = cc.Sprite.create(res.bgm01_png);
      this.addChild(bgm, 1);
      bgm.setPosition(size.width * 0.9,size.height * 0.85);

      batu = cc.Sprite.create(res.bgm03_png);
      this.addChild(batu, 1);
      batu.setPosition(size.width * 0.9,size.height * 0.85);
      batu.setVisible(false);

      this.scheduleUpdate();

      cc.eventManager.addListener({
         event: cc.EventListener.TOUCH_ONE_BY_ONE,
         onTouchBegan: function(touch, event) {
           //console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
           startTouch = touch.getLocation();
           node.setPosition(startTouch);
           //node.setPosition(startTouch);
           //player.setPosition(startTouch);
           //this.player.body.applyImpulse(cp.v(-10, 0), cp.v(0, 0)); //run speed
           /*
           //プレイヤー内クリック処理
           var player_x = this.player.getLocation().x;
           var player_y = this.player.getLocation().y;
           */
           //プレイヤーの中をクリックしたか
           /*
           if(touch.getLocation().y < player_y + 30 && touch.getLocation().y > player_y - 30 && touch.getLocation().x < player_x + 30 && touch.getLocation().x > player_x - 30 ){
              playertouch = true;
           }*/

           //■■■■■BGM_on/off■■■■■■■■■■■■■■■■■■■■■■■■■■
           if(touch.getLocation().y < 295 && touch.getLocation().y > 270 && touch.getLocation().x < 445 && touch.getLocation().x > 415 ){
             console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);

             if(BGMchange == true){
               audioEngine.stopMusic();//前BGMの停止
               batu.setVisible(true);
               BGMchange = false;
               console.log(BGMchange);
             }else if(BGMchange == false){
/*
               //音楽再生エンジン
               audioEngine = cc.audioEngine;

               if (!audioEngine.isMusicPlaying()) {
                 audioEngine.playMusic(res.select_mp3 , true);
               }*/
               batu.setVisible(false);
               BGMchange = true;
               console.log(BGMchange);
             }
           }

           //■■■■■メニューに戻る■■■■■■■■■■■■■■■■■■■■■■■■■■
           if(touch.getLocation().y < 280 && touch.getLocation().y > 260 && touch.getLocation().x < 315 && touch.getLocation().x > 260 ){
             console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
             var a = cc.TransitionFade.create(2.0, new StageSelectScene());
             cc.director.runScene(a);
           }

           //■■■■■リトライ■■■■■■■■■■■■■■■■■■■■■■■■■■
           if(touch.getLocation().y < 280 && touch.getLocation().y > 260 && touch.getLocation().x < 390 && touch.getLocation().x > 330 ){
             console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
             var a = cc.TransitionFade.create(2.0, new gameScene());
             cc.director.runScene(a);
           }


           return true;

         }.bind(this),// レイヤーのthisを使えるようにする

         onTouchMoved: function(touch, event) {
           //cc.log("Touch Moved!");
           endTouch = touch.getLocation();
           abstouchX = Math.abs(endTouch.x);
           //console.log(abstouchX);
           abstouchY = Math.abs(endTouch.y);
           //console.log(abstouchY);

           endX2 = (endTouch.x - startTouch.x);
           //console.log("えんどx" + endX2);
           endY2 = (endTouch.y - startTouch.y);
           //console.log("エンドy" + endY2);

           touchpl = true;

           //touchpl = true;
         },
         onTouchEnded: function(touch, event) {

           if(touchpl == true && jump > 0 /*&& playertouch == true*/){
             this.player.body.applyImpulse(cp.v(-endX2, -endY2), cp.v(0, 0)); //run speed
             jump--; //ジャンプ回数を減らす
             console.log("ジャンプ残り" + jump);
             label02.setString("残りジャンプ" + jump);
             playertouch == false;
           }
           //console.log("スコア" + score);
           //endTouch = touch.getLocation();
           //touchpl = false;
           //player.body.applyImpulse(cp.v(10, 0), cp.v(0, 0)); //run speed

           //矢印
           endTouch = touch.getLocation();
           touchpl = false;
         }.bind(this),// レイヤーのthisを使えるようにする
       },this);



      //this.collisionBegin.bind(this) bind(this)を付けると、イベントリスナーでthisが使えるようになる
      space.setDefaultCollisionHandler(this.collisionBegin.bind(this), null, null, null);

      //雲
      this.schedule(this.addAsteroid, 5.0);

   },
   addCallback: function(callback) {
      callbacks.push(callback);
   },
   update: function(dt) {
      space.step(dt);
      for (var i = shapeArray.length - 1; i >= 0; i--) {
         shapeArray[i].image.x = shapeArray[i].body.p.x
         shapeArray[i].image.y = shapeArray[i].body.p.y
             var angle = Math.atan2(-shapeArray[i].body.rot.y, shapeArray[i].body.rot.x);
             shapeArray[i].image.rotation = angle * 57.2957795;

      }

      //矢印の判定
      if(touchpl){
         node.setVisible(true);
         if(jump > 0 /*&& playertouch == true*/){ //プレイヤー内クリック判定
            this.calcDirection(); //角度計算と矢印の長さを設定
          }
      }else {
           node.setVisible(false);
           node.clear();
        }
/*
      //画面スクロール
      var dX = this.player.getDistanceX();
      this.setPosition(cc.p(-dX, 0));
      this.scroll_gb.checkAndReload(this.player.sprite.x );
*/
  //Monjump++;
  //モンスターのジャンプ
  //if(Monjump > 100){
    //this.monster1.body.applyImpulse(cp.v(0, 50), cp.v(0, 0)); //run speed
    //this.monster2.body.applyImpulse(cp.v(0, 70), cp.v(0, 0)); //run speed
    //Monjump = 0;
//}

  if(ClearDou == false){
      Bonus--;
      Bcount = 0;
      label01.setString("レベル" + stage + "  スコア" + score + "  ボーナス" + Bonus);
      //console.log("おばだｎ" + score);
    }

    if(Bonus < 0){
      var c = cc.TransitionFade.create(2.0, new LoseScene());
      cc.director.runScene(c);
    }

      //addCallback関数に登録された処理を順番に実行する
      for (var i = 0; i < callbacks.length; ++i) {
         callbacks[i]();
      }
      callbacks = [];

   }/*.bind(this)*/,  // レイヤーのthisを使えるようにする

   collisionBegin: function(arbiter, space) {

      if (arbiter.a.tag == SpriteTag.terrain && arbiter.b.tag == SpriteTag.terrain) {
         if (this.player.status == PlayerStatus.landing) {
            cc.audioEngine.playEffect(res.landing_mp3);
            this.player.status = PlayerStatus.idling;
         }
      } else {

         if (arbiter.a.tag == SpriteTag.goal || arbiter.b.tag == SpriteTag.goal) {
            //cc.audioEngine.playEffect(res.pickup_coin_mp3);
            ClearDou = true; //クリア確認
            var b = cc.TransitionFade.create(2.0, new WinScene());
            cc.director.runScene(b);
         }
         if (arbiter.a.tag == SpriteTag.kieyuka || arbiter.b.tag == SpriteTag.kieyuka) {
            //cc.audioEngine.playEffect(res.food_mp3);
         }
         //console.log()
         if (arbiter.a.tag == SpriteTag.player) {
            var collision_obj = arbiter.b; // 衝突したShapeの取得
         } else {
            var collision_obj = arbiter.a; // 衝突したShapeの取得
         }
        if (arbiter.a.tag == SpriteTag.kieyuka || arbiter.b.tag == SpriteTag.kieyuka) {
         //衝突したオブジェクトを消すのは、update関数で定期的に行う
         this.addCallback(function() {
            for (var int = 0; int < objectArray.length; int++) { // 衝突したコインを探す
               var object = objectArray[int]; // 配置済みオブジェクトの取得
               if (object.shape == collision_obj) { // 衝突したコインの場合
                  //console.log("hit");
                  object.removeFromParent();
                  break; // 処理を抜ける
               }
            }
         }.bind(this));
       }
      }

      return true;
   },
   //スワイプ方向を検出する処理
   calcDirection: function(){
       var distX = endTouch.x - startTouch.x ;
       var distY = endTouch.y - startTouch.y ;
       var distT = Math.sqrt(distX  * distX  + distY * distY);

   if(distT > 60){
       //console.log(distX);
       //console.log(distY);
       //console.log(distT);

       node.clear();

       var sankaku = [
         cc.p(0,0),  //上頂点
         cc.p(35,-35),  //右
         cc.p(15,-35),   //内側
         cc.p(0, -(distT - 10)),   //下
         cc.p(-15,-35), //上に
         cc.p(-35,-35),   //左に
       ]

       var lineWidth = 3;
       node.drawPoly(sankaku,  fillcol,lineWidth, linecol);

   //角度（ラジアン）を求める
   var angle= Math.atan2(distY , distX );

   //角度（ラジアン）を角度（度数）に変換
   angle = angle * 180 / Math.PI ;
   //console.log("アングル" + angle);
   //矢印を回転させる
   node.setRotation(270 - angle);
   }
   },

   //雲の生成で追加
 addAsteroid: function(event) {
   var asteroid = new Asteroid();
   this.addChild(asteroid);
 },
 removeAsteroid: function(asteroid) {
   this.removeChild(asteroid);
 },

});

//雲
var Asteroid = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile(res.kumo_png);
  },
  onEnter: function() {
    this._super();
    this.setPosition(600, Math.random() * 100 + 200);
    var moveAction = cc.MoveTo.create(10, new cc.Point(-100, Math.random() * 100 + 200 ));
    this.runAction(moveAction);
    this.scheduleUpdate();
  },
  update: function(dt) {
		//画面の外にでた雲を消去する処理
    if (this.getPosition().x < -50) {
      gameLayer.removeAsteroid(this);
    }
  }
});

// this.addPostStepCallback(function() { // ステップ処理終了時に実行
//    for (var int = 0; int < this.shapeArray.length; int++) { // 衝突したコインを探す
//       var shape = this.shapeArray[int]; // 配置済みオブジェクトの取得
//       if (shape == shapes[1]) { // 衝突したコインの場合
//          shape.removeFromParent(); // 削除処理を実行
//          this.shapeArray.splice(int, 1); // 配列から削除
//          break; // 処理を抜ける
//       }
//    }
// }.bind(this)); // レイヤーのthisを使えるようにする

/*

var touchListener = cc.EventListener.create({
   event: cc.EventListener.TOUCH_ONE_BY_ONE, // シングルタッチのみ対応
   swallowTouches: false, // 以降のノードにタッチイベントを渡す
   onTouchBegan: function(touch, event) { // タッチ開始時
      var pos = touch.getLocation();

      console.log("shapeArray.length:", shapeArray.length)
         // すべてのshapをチェックする
      for (var i = 0; i < shapeArray.length; i++) {
         var shape = shapeArray[i];
         console.log("shape.type:", i, shape.type)
            //pointQueryは物理オブジェクトの内側がタップされたかどうか判定する関数
         if (shape.pointQuery(cp.v(pos.x, pos.y)) != undefined) {
            console.log("hit ")
            if (shape.name == SpriteTag.destroyable) {
               //ブロックをタップしたときは、消去する
               space.removeBody(shape.getBody());
               space.removeShape(shape);
               gameLayer.removeChild(shape.image);
               shapeArray.splice(i, 1);
               console.log("remove block")
               return;
            } else if (shape.name == SpriteTag.totem) {
               // トーテムをタップしたときは、衝撃を与える
               shape.body.applyImpulse(cp.v(500, 0), cp.v(0, -20))
               return;
            }
         }
      }
      // 何も無い場所をタップしたときは箱を追加する
      gameLayer.addBody(pos.x, pos.y, 24, 24, true, res.brick1x1_png, SpriteTag.destroyable);
      return;

   }

});
*/


//  addBody: function(posX, posY, width, height, isDynamic, spriteImage, type) {
//     if (isDynamic) {
//        var body = new cp.Body(1, cp.momentForBox(1, width, height));
//     } else {
//        var body = new cp.Body(Infinity, Infinity);
//     }
//     body.setPos(cp.v(posX, posY));
//     var bodySprite = cc.Sprite.create(spriteImage);
//     gameLayer.addChild(bodySprite, 0);
//     bodySprite.setPosition(posX, posY);
//     if (isDynamic) {
//        space.addBody(body);
//     }
//     var shape = new cp.BoxShape(body, width, height);
//     shape.setFriction(1);
//     shape.setElasticity(0);
//     shape.name = type;
//     shape.setCollisionType(type);
//     shape.image = bodySprite;
//     space.addShape(shape);
//     shapeArray.push(shape);
//  },
