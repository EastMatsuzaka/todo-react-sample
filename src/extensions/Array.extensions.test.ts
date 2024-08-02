import './Array.extensions';

describe('Array.prototype.forEachAsync', () => {
  test('非同期処理が全て完了するまで待機する', async () => {
    const array = [1, 2, 3, 4, 5];
    const callback = vi.fn().mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    await array.forEachAsync(callback);

    expect(callback).toHaveBeenCalledTimes(array.length);
  });
});
