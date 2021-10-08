import BrowseHistory from "./BrowseHistory"
import Iterator from './Iterator'

class Main {
  main(): void {
    let history = new BrowseHistory()
    history.push('a')
    history.push('b')
    history.push('c')

    let iterator: Iterator<String> = history.createIterator()
    while (iterator.hasNext()) {
      let url = iterator.current()
      console.log(url)
      iterator.next()
    }
  }
}

let run = new Main()
run.main()