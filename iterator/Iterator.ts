export default interface Iterator<T> {
  hasNext(): Boolean
  current(): T
  next(): void
}