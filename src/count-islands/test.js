const countIslands = require(".");

describe("Count Islands", () => {
  test("flat island", () => {
    const grid = [[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1]];

    expect(countIslands(grid)).toBe(3);
  });

  test("no land in flat sight", () => {
    const grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    expect(countIslands(grid)).toBe(0);
  });

  test("3x3 island", () => {
    const grid = [
      [1, 1, 0],
      [0, 0, 1],
      [1, 0, 1],
    ];

    expect(countIslands(grid)).toBe(3);
  });

  test("4x4 island", () => {
    const grid = [
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
      [0, 1, 0, 0],
    ];

    expect(countIslands(grid)).toBe(4);
  });

  test("5x5 island", () => {
    const grid = [
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
    ];

    expect(countIslands(grid)).toBe(6);
  });

  test("Example island - 1", () => {
    const grid = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ];

    expect(countIslands(grid)).toBe(3);
  });

  test("Example island - 2", () => {
    const grid = [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(countIslands(grid)).toBe(1);
  });

  test("large island - 1", () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    expect(countIslands(grid)).toBe(9);
  });

  test("all lands - 5x18", () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    expect(countIslands(grid)).toBe(1);
  });

  test("large lands - 20x9", () => {
    const grid = [
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    ];

    expect(countIslands(grid)).toBe(10);
  });

  test("Horizontal misplaced characters", () => {
    const words = [["A", "S", "A"]];
    const word = "SAA";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Vertical misplaced characters", () => {
    const words = [["B"], ["A"], ["C"]];
    const word = "ABC";

    expect(wordSearch(words, word)).toBe(false);
  });
});
