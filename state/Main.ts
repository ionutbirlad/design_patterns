import Canvas from './Canvas'
import SelectionTool from './SelectionTool'
// import BrushTool from './BrushTool'
// import EraserTool from './EraserTool'

class Main {
  main(): void {
    let canvas = new Canvas()
    canvas.setCurrentTool = new SelectionTool()
    canvas.mouseDown()
    canvas.mouseUp()
  }
}

let run = new Main()
run.main()