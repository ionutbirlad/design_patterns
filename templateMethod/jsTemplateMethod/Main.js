"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransferMoneyTask_1 = __importDefault(require("./TransferMoneyTask"));
// import GenerateReportTask from './GenerateReportTask'
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var task = new TransferMoneyTask_1.default();
        task.execute();
    };
    return Main;
}());
var run = new Main();
run.main();
