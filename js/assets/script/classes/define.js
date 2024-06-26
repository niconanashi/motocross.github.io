window.gLocalAssetContainer["define"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assetInfo_1 = require("./assetInfo");
/**
 * ゲーム関連の静的情報
 */
var define;
(function (define) {
    /** デバッグ用：タッチしている間PCが上昇するようにするフラグ */
    define.DEBUG_HOLD_TO_UP = false;
    /** デバッグ用：障害物にあたらなくするフラグ */
    define.DEBUG_COLLISION = false;
    /** デバッグ用：あたり判定範囲を表示するフラグ */
    define.DEBUG_SHOW_COLLISION_RECT = false;
    /** デバッグ用：あたり判定範囲表示の色 */
    define.DEBUG_COLLISION_RECT_COLOR = "red";
    /** デバッグ用：あたり判定範囲表示の不透明度 */
    define.DEBUG_COLLISION_RECT_OPACITY = 0.3;
    /** 制限時間[秒] */
    define.GAME_TIME = 45;
    /** このゲームが許容する最長の制限時間[秒] */
    define.GAME_TIME_MAX = 99;
    /** 残り時間警告が始まる残り時間[秒]（この時間未満になった時に始まる） */
    define.CAUTION_TIME_CONDITION = 10;
    /** 横解像度を480から640に変更した際のX座標オフセット値 */
    define.OFFSET_X = (640 - 480) / 2;
    /** ゲーム中の数字の桁数 */
    define.GAME_TIMER_DIGIT = 2;
    /** ゲーム中の数字のX座標 */
    define.GAME_TIMER_X = 70 + define.OFFSET_X;
    /** ゲーム中の数字のY座標 */
    define.GAME_TIMER_Y = 3;
    /** ポイント用の数字の桁数 */
    define.GAME_SCORE_DIGIT = 5;
    /** ポイント用の数字のX座標 */
    define.GAME_SCORE_X = 403 + define.OFFSET_X;
    /** ポイント用の数字のY座標 */
    define.GAME_SCORE_Y = 3;
    /** スコア上限 */
    define.SCORE_LIMIT = Math.pow(10, define.GAME_SCORE_DIGIT) - 1;
    /** UIアイコン（時計）のX座標 */
    define.ICON_T_X = 8 + define.OFFSET_X;
    /** UIアイコン（時計）のY座標 */
    define.ICON_T_Y = 0;
    /** UIアイコン（pt）のX座標 */
    define.ICON_PT_X = 432 + define.OFFSET_X;
    /** UIアイコン（pt）のY座標 */
    define.ICON_PT_Y = 0;
    /** PC/波/水面のX座標 */
    define.SURFING_X = -100;
    /** PC/波/水面のY座標 */
    define.SURFING_Y = 30;
    /** PCのアタッチ先ボーン名 */
    define.PC_PIVOT_NAME = "pc_null";
    /** ミスからの復帰後の無敵時間[フレーム] */
    define.RUNUP_FRAMES = 40;
    /** タッチ時に設定される上昇時間[フレーム] */
    define.UP_FRAMES_PER_TOUCH = 5;
    /** タッチ時に設定されるタッチ受付不能時間[フレーム] */
    define.TOUCH_COOLING_FRAMES = 30;
    /** 上昇アニメの再生速度 */
    define.PLAYSPEED_UP = 1.5;
    /** 下降アニメの再生速度 */
    define.PLAYSPEED_DOWN = 0.9;
    /** スクロール速度[px/フレーム]：分子 */
    define.SCROLL_PX_PER_FRAME_NUM = 37 * 160 * 2;
    /** スクロール速度[px/フレーム]：分母 */
    define.SCROLL_PX_PER_FRAME_DENOM = 60 * 30;
    /** スクロール量とメートル値の比[m/px]：分子 */
    define.SCROLL_METER_PER_PX_NUM = 1;
    /** スクロール量とメートル値の比[m/px]：分母 */
    define.SCROLL_METER_PER_PX_DENOM = 1;
    /** SCROLL_PX_PER_FRAME_NUMを基準とした最大速度 */
    define.SCROLL_FACTOR_MAX = 2;
    /** 最大速度に対応するPCせり出し量[px] */
    define.PC_OVERHANG_MAX = 50;
    /** 障害物の表示を開始する画面右端からのピクセル距離 */
    define.OBSTACLE_APPEAR_AREA_WIDTH = 480;
    /** 障害物の表示を終了する画面左端からのピクセル距離 */
    define.OBSTACLE_WIDTH_TO_VANISH_AREA = 480;
    /** プテラノドンのアニメを開始するX座標 */
    define.PTERANODON_WAKE_X = 534 + define.OFFSET_X;
    /** プテラノドンのあたり判定位置のボーン名 */
    define.PTERANODON_PIVOT_NAME = "obstacle_pteranodon_01_1";
    /** PCのあたり判定矩形 */
    define.COLLISION_PC = {
        x: -55 + 0, y: -18, width: 78 - 0, height: 35 - 20
    };
    /** 障害物のあたり判定矩形配列：カモメ */
    define.COLLISIONS_GULL = [
        { x: 15, y: -60, width: 44, height: 50 }
    ];
    /** 障害物のあたり判定矩形配列：岩 */
    define.COLLISIONS_ROCK = [
       { x: 29, y: -250, width: 30, height: 50 } 
    ];
    /** 障害物のあたり判定矩形配列：サメ */
    define.COLLISIONS_SHARK = [
        { x: 96, y: -95, width: 26, height: 30 },
        { x: 84, y: -85, width: 5, height: 30 },
        { x: 72, y: -75, width: 5, height: 30 },
        { x: 60, y: -65, width: 5, height: 30 },
        { x: 48, y: -55, width: 5, height: 30 },
        { x: 36, y: -45, width: 5, height: 30 },
        { x: 24, y: -35, width: 5, height: 30 }
    
    
    ];
    /** 障害物のあたり判定矩形配列：プテラノドン */
    define.COLLISIONS_PTERANODON = [
        { x: 12, y: 200, width: 64, height: 23 }
    ];
    /** 障害物に対する背景物のスクロール速度比 */
    define.LANDMARK_SCROLL_RATE = 1;
    /** 背景物の下端のY座標 */
    define.LANDMARK_BOTTOM_Y = 355;
    /** 背景物の配置位置情報配列 */
    define.LANDMARK_PLACEINFO = [
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj01, x: -61 * 30 },
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj03, x: 80 * 30 },
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj02, x: 620 * 30 },//ウシ
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj04, x: 360 * 30 },
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj05, x: 480 * 30 },
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj07, x: 640 * 30 },//木
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj06, x: 790 * 30 },//トラック 
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj08, x: 720 * 30 },
        { frameName: assetInfo_1.AssetInfo.bgObj.frames.bgObj09, x: 850 * 30 }
    ];
    /** マップの終端座標 */
    define.MAP_END_PIXEL = 30630 + 88 + 640;
    /** マップループ時開始座標 */
    define.MAP_REPEATED_START_PIXEL = -1500;
})(define = exports.define || (exports.define = {}));

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}