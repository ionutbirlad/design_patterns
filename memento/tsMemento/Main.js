"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Editor_1 = __importDefault(require("./Editor"));
var History_1 = __importDefault(require("./History"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var editor = new Editor_1.default();
        var history = new History_1.default();
        editor.setContent = 'a';
        history.push(editor.createState());
        editor.setContent = 'b';
        history.push(editor.createState());
        editor.setContent = 'c';
        editor.restore(history.pop());
        editor.restore(history.pop());
        console.log(editor.getContent);
    };
    return Main;
}());
var run = new Main();
run.main();
