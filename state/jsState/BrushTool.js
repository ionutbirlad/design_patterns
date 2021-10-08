"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrushTool = /** @class */ (function () {
    function BrushTool() {
    }
    BrushTool.prototype.mouseDown = function () {
        console.log('Brush icon');
    };
    BrushTool.prototype.mouseUp = function () {
        console.log('Draw a line');
    };
    return BrushTool;
}());
exports.default = BrushTool;
