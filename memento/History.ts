import EditorState from './EditorState'

export default class History {
  private states: any[]

  public push(state: EditorState): void {
    this.states.push(state)
  }
  public pop(): EditorState {
    let lastIndex = this.states.length - 1
    let lastState = this.states[lastIndex]
    this.states.splice(lastIndex, 1)
    return lastState
  }

  constructor(states: string[] = []) {
    this.states = states
  }
}