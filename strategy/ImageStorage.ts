import Compressor from './Compressor'
import Filter from './Filter'

export default class ImageStorage {
  // private compressor: Compressor
  // private filter: Filter

  // constructor(compressor: Compressor, filter: Filter) {
  //   this.compressor = compressor
  //   this.filter = filter
  // }

  public store(fileName: String, compressor: Compressor, filter: Filter): void {
    compressor.compress(fileName)
    filter.apply(fileName)
  }
}