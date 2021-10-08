import EditorState from './EditorState'

export default class Editor {
  private content: String

  public createState(): EditorState {
    return new EditorState(this.content)
  }
  public restore(state: EditorState): void {
    this.content = state.getContent
  }

  constructor(content: String = '') {
    this.content = content
  }

  public get getContent(): String {
    return this.content
  }
  public set setContent(value: String) {
    this.content = value
  }
}