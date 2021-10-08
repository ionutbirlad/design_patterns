"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = __importDefault(require("./Canvas"));
var SelectionTool_1 = __importDefault(require("./SelectionTool"));
// import BrushTool from './BrushTool'
// import EraserTool from './EraserTool'
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var canvas = new Canvas_1.default();
        canvas.setCurrentTool = new SelectionTool_1.default();
        canvas.mouseDown();
        canvas.mouseUp();
    };
    return Main;
}());
var run = new Main();
run.main();
