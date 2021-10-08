import Editor from './Editor'
import History from './History'

class Main {
  main(): void {
    let editor = new Editor()
    let history = new History()

    editor.setContent = 'a'
    history.push(editor.createState())
    editor.setContent = 'b'
    history.push(editor.createState())
    editor.setContent = 'c'
    editor.restore(history.pop())
    editor.restore(history.pop())

    console.log(editor.getContent)
  }
}

let run = new Main()
run.main()