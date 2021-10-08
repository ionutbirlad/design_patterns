"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.prototype.mouseDown = function () {
        this.currentTool.mouseDown();
    };
    Canvas.prototype.mouseUp = function () {
        this.currentTool.mouseUp();
    };
    Object.defineProperty(Canvas.prototype, "getCurrentTool", {
        get: function () {
            return this.currentTool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "setCurrentTool", {
        set: function (value) {
            this.currentTool = value;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}());
exports.default = Canvas;
