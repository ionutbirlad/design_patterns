import Tool from './Tool'

export default class BrushTool implements Tool {
  public mouseDown(): void {
    console.log('Brush icon')
  }
  public mouseUp(): void {
    console.log('Draw a line')
  }
}