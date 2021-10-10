import ImageStorage from './ImageStorage'
import JpegCompressor from './JpegCompressor'
// import PngCompressor from './PngCompressor'
import BlackAndWhiteFilter from './BlackAndWhiteFilter'

class Main {
  public main(): void {
    let imageStorage = new ImageStorage(
      new JpegCompressor(), new BlackAndWhiteFilter()
    )
    imageStorage.store('a')
  }
}

let run = new Main()
run.main()