"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
    }
    SelectionTool.prototype.mouseDown = function () {
        console.log('Selection icon');
    };
    SelectionTool.prototype.mouseUp = function () {
        console.log('Draw a dashed rectangle');
    };
    return SelectionTool;
}());
exports.default = SelectionTool;
