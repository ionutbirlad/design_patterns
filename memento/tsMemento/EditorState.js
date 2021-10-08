"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorState = /** @class */ (function () {
    function EditorState(content) {
        this.content = content;
    }
    Object.defineProperty(EditorState.prototype, "getContent", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    return EditorState;
}());
exports.default = EditorState;
