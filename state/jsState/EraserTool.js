"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EraserTool = /** @class */ (function () {
    function EraserTool() {
    }
    EraserTool.prototype.mouseDown = function () {
        console.log('Eraser icon');
    };
    EraserTool.prototype.mouseUp = function () {
        console.log('Erase something');
    };
    return EraserTool;
}());
exports.default = EraserTool;
