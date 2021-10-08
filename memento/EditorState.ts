export default class EditorState {
  private readonly content: String

  constructor(content: String) {
    this.content = content
  }

  public get getContent(): String {
    return this.content
  }
}