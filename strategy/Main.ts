import ImageStorage from './ImageStorage'
import JpegCompressor from './JpegCompressor'
import PngCompressor from './PngCompressor'
import BlackAndWhiteFilter from './BlackAndWhiteFilter'

class Main {
  public main(): void {
    let imageStorage = new ImageStorage()
    imageStorage.store(
      'a', new JpegCompressor(), new BlackAndWhiteFilter()
    )
    imageStorage.store(
      'a', new PngCompressor(), new BlackAndWhiteFilter()
    )
  }
}

let run = new Main()
run.main()