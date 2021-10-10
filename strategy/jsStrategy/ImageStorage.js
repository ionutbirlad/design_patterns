"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageStorage = /** @class */ (function () {
    function ImageStorage(compressor, filter) {
        this.compressor = compressor;
        this.filter = filter;
    }
    ImageStorage.prototype.store = function (fileName) {
        this.compressor.compress(fileName);
        this.filter.apply(fileName);
    };
    return ImageStorage;
}());
exports.default = ImageStorage;
