import Tool from './Tool'

export default class Canvas {
  private currentTool: Tool

  public mouseDown(): void {
    this.currentTool.mouseDown()
  }
  public mouseUp(): void {
    this.currentTool.mouseUp()
  }

  public get getCurrentTool(): Tool {
    return this.currentTool
  }
  public set setCurrentTool(value: Tool) {
    this.currentTool = value
  }
}