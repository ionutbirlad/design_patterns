"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowseHistory = /** @class */ (function () {
    function BrowseHistory() {
        this.urls = new Array();
    }
    BrowseHistory.prototype.push = function (url) {
        this.urls.push(url);
    };
    BrowseHistory.prototype.pop = function () {
        var lastIndex = this.urls.length - 1;
        var lastUrl = this.urls[lastIndex];
        this.urls.splice(lastIndex, 1);
        return lastUrl;
    };
    BrowseHistory.prototype.createIterator = function () {
        return new BrowseHistory.ListIterator(this);
    };
    BrowseHistory.ListIterator = /** @class */ (function () {
        function class_1(history) {
            this.index = 0;
            this.history = history;
        }
        class_1.prototype.hasNext = function () {
            return (this.index < this.history.urls.length);
        };
        class_1.prototype.current = function () {
            return this.history.urls[this.index];
        };
        class_1.prototype.next = function () {
            this.index++;
        };
        return class_1;
    }());
    return BrowseHistory;
}());
exports.default = BrowseHistory;
