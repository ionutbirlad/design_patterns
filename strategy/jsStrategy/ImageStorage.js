"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageStorage = /** @class */ (function () {
    function ImageStorage() {
    }
    // private compressor: Compressor
    // private filter: Filter
    // constructor(compressor: Compressor, filter: Filter) {
    //   this.compressor = compressor
    //   this.filter = filter
    // }
    ImageStorage.prototype.store = function (fileName, compressor, filter) {
        compressor.compress(fileName);
        filter.apply(fileName);
    };
    return ImageStorage;
}());
exports.default = ImageStorage;
