import Filter from './Filter'

export default class BlackAndWhiteFilter implements Filter {
  public apply(fileName: String) {
    console.log('Applying BLACKAND WHITE filter...')
  }
}