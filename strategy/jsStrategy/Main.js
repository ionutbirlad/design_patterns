"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ImageStorage_1 = __importDefault(require("./ImageStorage"));
var JpegCompressor_1 = __importDefault(require("./JpegCompressor"));
var PngCompressor_1 = __importDefault(require("./PngCompressor"));
var BlackAndWhiteFilter_1 = __importDefault(require("./BlackAndWhiteFilter"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var imageStorage = new ImageStorage_1.default();
        imageStorage.store('a', new JpegCompressor_1.default(), new BlackAndWhiteFilter_1.default());
        imageStorage.store('a', new PngCompressor_1.default(), new BlackAndWhiteFilter_1.default());
    };
    return Main;
}());
var run = new Main();
run.main();
