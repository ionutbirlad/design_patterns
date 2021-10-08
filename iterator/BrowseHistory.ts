import Iterator from './Iterator'

export default class BrowseHistory {
  private urls: any[] = new Array<String>()

  public push(url: String): void {
    this.urls.push(url)
  }
  public pop(): String {
    let lastIndex = this.urls.length - 1
    let lastUrl = this.urls[lastIndex]
    this.urls.splice(lastIndex, 1)
    return lastUrl
  }

  public createIterator(): Iterator<String> {
    return new BrowseHistory.ListIterator(this)
  }

  static ListIterator = class implements Iterator<String> {

    private history: BrowseHistory
    private index: number = 0

    constructor(history: BrowseHistory) {
      this.history = history
    }

    public hasNext(): boolean {
      return (this.index < this.history.urls.length)
    }
    public current(): String {
      return this.history.urls[this.index]
    }
    public next(): void {
      this.index++
    }
  }
}