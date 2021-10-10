import Compressor from './Compressor'

export default class JpegCompressor implements Compressor {
  public compress(fileName: String): void {
    console.log('Compressing using JPEG...')
  }
}