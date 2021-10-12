"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuditTrail_1 = __importDefault(require("./AuditTrail"));
var Task = /** @class */ (function () {
    // default constructor
    function Task() {
        this.auditTrail = new AuditTrail_1.default;
    }
    Task.prototype.execute = function () {
        this.auditTrail.record();
        this.doExecute();
    };
    return Task;
}());
exports.default = Task;
