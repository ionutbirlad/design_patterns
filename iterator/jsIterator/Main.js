"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BrowseHistory_1 = __importDefault(require("./BrowseHistory"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var history = new BrowseHistory_1.default();
        history.push('a');
        history.push('b');
        history.push('c');
        var iterator = history.createIterator();
        while (iterator.hasNext()) {
            var url = iterator.current();
            console.log(url);
            iterator.next();
        }
    };
    return Main;
}());
var run = new Main();
run.main();
