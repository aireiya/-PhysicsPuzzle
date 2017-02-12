var res = {
   brick1x1_png: "res/brick1x1.png",
   brick2x1_png: "res/brick2x1.png",
   brick3x1_png: "res/brick3x1.png",
   brick4x1_png: "res/brick4x1.png",
   brick4x2_png: "res/brick4x2.png",
   ground_png: "res/ground.png",
   totem_png: "res/totem.png",
   player_png: "res/player00.png",
   terrain_png: "res/terrain.png",
   field_png: "res/map.png",

   background_png: "res/exterior-parallaxBG1.png",
   object_tsx: "res/object.tsx",
   terrain_tsx: "res/terrain.tsx",
   object_png: "res/object.png",
   pickup_coin_mp3: "res/pickup_coin.mp3",
   food_mp3: "res/food.mp3",
   landing_mp3: "res/landing.mp3",
   jump_mp3: "res/jump.mp3",
   decide_mp3: "res/decide.mp3",
   complete_mp3: "res/complete.mp3",
   start_mp3: "res/start.mp3",
   explode_mp3: "res/explode.mp3",

   menu_png: "res/menu.png",
   reset_png: "res/reset.png",

   //セレクトステージ
   select01_png: "res/icon01.png",
   select02_png: "res/icon02.png",
   select03_png: "res/icon03.png",
   select04_png: "res/icon04.png",
   select05_png: "res/icon05.png",

   //BGMオンオフ
   bgm01_png: "res/bgm01.png",
   bgm02_png: "res/bgm02.png",
   bgm03_png: "res/bgm03.png",

   kumo_png: "res/game_cloud.png",

   monster1_png: "res/enemy01.png",
   monster2_png: "res/enemy02.png",
   title_png: "res/waku.png",
   sentaku_png: "res/sentaku.png",

   map_test_tmx: "res/map_test.tmx",
   map00_tmx: "res/map00.tmx",
   map01_tmx: "res/map01.tmx",
   map02_tmx: "res/map02.tmx",
   map03_tmx: "res/map03.tmx",
   map04_tmx: "res/map04.tmx",
   map05_tmx: "res/map05.tmx",

   main_mp3: "res/main01.mp3",
   clear_mp3: "res/clear01.mp3",
   over_mp3: "res/over01.mp3",
};

var g_resources = [];
for (var i in res) {
   g_resources.push(res[i]);
}
