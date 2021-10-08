"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var History = /** @class */ (function () {
    function History(states) {
        if (states === void 0) { states = []; }
        this.states = states;
    }
    History.prototype.push = function (state) {
        this.states.push(state);
    };
    History.prototype.pop = function () {
        var lastIndex = this.states.length - 1;
        var lastState = this.states[lastIndex];
        this.states.splice(lastIndex, 1);
        return lastState;
    };
    return History;
}());
exports.default = History;
