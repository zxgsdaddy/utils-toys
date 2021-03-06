//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main2 = (function (_super) {
    __extends(Main2, _super);
    function Main2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //debug模式，使用图形绘制
        _this.isDebug = false;
        _this.factor = 50;
        return _this;
    }
    Main2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main2.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    Main2.prototype.updatePosition = function (body) {
        var disp = body.displays[0];
        disp.x = body.position[0] * this.factor;
        disp.y = body.position[1] * this.factor;
        // if (body.sleepState === p2.Body.SLEEPING) {
        //     body.applyImpulse([Math.random() < 0.5 ? -50 : 50, 50], [0, 0]);
        // }
    };
    Main2.prototype.createStone = function (world, point, parent, type) {
        if (type === void 0) { type = 0; }
        var display = new eui.Image('ft_pic_stone_png');
        display.width = display.height = 12;
        display.anchorOffsetX = display.width / 2;
        display.anchorOffsetY = display.height / 2;
        var body = new p2.Body({
            mass: 2,
            position: [point.x / this.factor, point.y / this.factor],
        });
        body.damping = .3;
        var shape = type ? new p2.Particle() : new p2.Circle({ radius: 0.1 });
        shape.material = this.stoneM;
        body.addShape(shape);
        body.displays = [display];
        body.type = p2.Body.DYNAMIC;
        this.updatePosition(body);
        parent.addChild(display);
        world.addBody(body);
        return body;
    };
    Main2.prototype.createBox = function (world, point, parent) {
        var box_arr = [];
        for (var i = 0; i < 4; i++) {
            // let display = new eui.Image('ft_pic_glass_cover_png'),
            var len = 186, display = new eui.Rect(0, 0, 0xfff000);
            display.width = (i % 2 === 0 ? 2 : 1) * len;
            display.height = (i % 2 === 0 ? 1 : 2) * len;
            display.anchorOffsetX = display.width / 2;
            display.anchorOffsetY = display.height / 2;
            var _position = [point.x / this.factor, point.y / this.factor];
            switch (i) {
                case 0:
                    _position = [(point.x) / this.factor, (point.y - display.height) / this.factor];
                    break;
                case 1:
                    _position = [(point.x + display.width) / this.factor, (point.y) / this.factor];
                    break;
                case 2:
                    _position = [(point.x) / this.factor, (point.y + display.height) / this.factor];
                    break;
                case 3:
                    _position = [(point.x - display.width) / this.factor, (point.y) / this.factor];
                    break;
            }
            var body = new p2.Body({
                mass: 0,
                fixedRotation: true,
                position: _position
            });
            var shape = new p2.Box({
                width: display.width / this.factor,
                height: display.height / this.factor,
            });
            shape.material = this.boxM;
            body.addShape(shape);
            body.displays = [display];
            body.type = p2.Body.STATIC;
            this.updatePosition(body);
            parent.addChild(display);
            world.addBody(body);
            box_arr.push(body);
        }
        return box_arr;
    };
    Main2.prototype.drawConvex = function () {
        // let rad_precise: number = 0.15,
        var rad_precise = 0.5, thickness = 10, r = 93, d = 93 * 2, tem_v1 = [], tem_v2 = [], vertices_list = [];
        vertices_list.push([0, 0]);
        for (var i = 0, len = (Math.PI / 2 / rad_precise) << 0; i < len; i++) {
            var _w = Math.cos(i * rad_precise) * r << 0, x = r - _w + thickness, y = Math.sin(i * rad_precise) * r << 0;
            tem_v1.push([x, y]);
            tem_v2.push([x + 2 * _w, y]);
        }
        vertices_list.push.apply(vertices_list, tem_v1);
        vertices_list.push([r + thickness, r]);
        vertices_list.push([r + thickness, r + thickness]);
        // vertices_list.push(...tem_v2.reverse());
        // vertices_list.push([2 * thickness + d, 0]);
        // vertices_list.push([2 * thickness + d, r + thickness]);
        vertices_list.push([0, r + thickness]);
        // vertices_list = vertices_list.map(pos => [pos[0] / this.factor, pos[1] / this.factor]);
        var body = new p2.Body({
            mass: 0,
            fixedRotation: true,
            position: [10, 10],
            allowSleep: false
        });
        vertices_list = [[0, 0], [103, 103], [0, 10]];
        var shape = new p2.Convex({
            vertices: vertices_list
        });
        console.log('vertices_list', vertices_list);
        // body.fromPolygon(vertices_list, {
        // removeCollinearPoints: true,
        // optimalDecomp: true
        // });
        body.type = p2.Body.STATIC;
        body.addShape(shape);
        var display = new eui.Image('ft_pic_glass_cover_png');
        this.stage.addChild(display);
        body.displays = [display];
        this.world.addBody(body);
        this.updatePosition(body);
        this.debugDraw.drawConvex(shape, body);
        return body;
    };
    Main2.prototype.createDebug = function () {
        //创建调试试图
        this.debugDraw = new p2DebugDraw(this.world);
        var sprite = new egret.Sprite();
        this.stage.addChild(sprite);
        this.debugDraw.setSprite(sprite);
    };
    /**
     * 创建游戏场景
     */
    Main2.prototype.createGameScene = function () {
        var _this = this;
        //创建world
        var world = new p2.World({ gravity: [0, 0] });
        world.sleepMode = p2.World.NO_SLEEPING;
        world.useWorldGravityAsFrictionGravity = true;
        this.world = world;
        this.createDebug();
        this.stoneM = new p2.Material(1);
        this.boxM = new p2.Material(0);
        world.addContactMaterial(new p2.ContactMaterial(this.stoneM, this.boxM, {
            frictionRelaxation: 0,
            stiffness: 1e5
        }));
        world.addContactMaterial(new p2.ContactMaterial(this.stoneM, this.stoneM, {
            frictionRelaxation: 10,
            stiffness: 10
        }));
        var c = this.drawConvex();
        var stones = [];
        // Array(...Array(10)).forEach((_, i) => {
        //     stones.push(this.createStone(world, egret.Point.create(510 + i * 2, 510 + i * 2), this.stage));
        // });
        Array.apply(void 0, Array(10)).forEach(function (_, i) {
            stones.push(_this.createStone(world, egret.Point.create(500 + i * 10, 500 + i * 10), _this.stage));
        });
        // Array(...Array(10)).forEach((_, i) => {
        //     stones.push(this.createStone(world, egret.Point.create(600 - i * 2, 510 + i * 2), this.stage, 1));
        // });
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            c.position = [evt.$stageX, evt.$stageY];
            // this.world.bodies[this.world.bodies.length - 1].position = [evt.$stageX / this.factor, evt.$stageY / this.factor];
        }, this);
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            _this.world.step(60 / 1000);
            _this.debugDraw.drawDebug();
            stones.forEach(function (stone) { return _this.updatePosition(stone); });
            // this.updatePosition(c);
            // egret.log(c.position);
            // egret.log(this.world.bodies[this.world.bodies.length - 1].position);
        }, this);
    };
    return Main2;
}(eui.UILayer));
__reflect(Main2.prototype, "Main2");
//# sourceMappingURL=demo12.js.map