"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EditorState_1 = __importDefault(require("./EditorState"));
var Editor = /** @class */ (function () {
    function Editor(content) {
        if (content === void 0) { content = ''; }
        this.content = content;
    }
    Editor.prototype.createState = function () {
        return new EditorState_1.default(this.content);
    };
    Editor.prototype.restore = function (state) {
        this.content = state.getContent;
    };
    Object.defineProperty(Editor.prototype, "getContent", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Editor.prototype, "setContent", {
        set: function (value) {
            this.content = value;
        },
        enumerable: false,
        configurable: true
    });
    return Editor;
}());
exports.default = Editor;
