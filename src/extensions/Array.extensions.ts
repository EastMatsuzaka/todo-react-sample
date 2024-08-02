export {};

declare global {
  interface Array<T> {
    /**
     * 非同期処理を伴う forEach
     * @param callback - 各要素に対して実行する非同期処理
     */
    forEachAsync(
      callback: (value: T, index: number, array: T[]) => Promise<void>,
    ): Promise<void>;
  }
}

Array.prototype.forEachAsync = async function <T>(
  this: T[],
  callback: (value: T, index: number, array: T[]) => Promise<void>,
): Promise<void> {
  await Promise.all(this.map(callback));
};
