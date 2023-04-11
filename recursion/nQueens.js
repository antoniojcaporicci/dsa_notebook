function find_all_arrangements(n) {
    const isConflict = (partialSet) => {
      let slateHasAllQueens = true;
      let lastQueenIndex = partialSet[partialSet.length - 1].indexOf("q");
      for (let i = 0; i <= partialSet.length - 1; i++) {
        let row = partialSet[i];
        if (!row.includes("q")) {
          slateHasAllQueens = false;
        }
  
        if (row.indexOf("q") === lastQueenIndex) {
          return true;
        }
  
        if (
          Math.abs(row.indexOf("q") - lastQueenIndex) ===
          Math.abs(partialSet.length - 1 - i)
        ) {
          return true;
        }
      }
  
      if (slateHasAllQueens) {
        return false;
      }
    };
  
    const placeQueenOnSlate = (slate, x, y) => {
      const rowWithQueen = slate[x].split("");
      rowWithQueen[y] = "q";
      slate[x] = rowWithQueen.join("");
    };
  
    const clearSlate = (slate, x, y) => {
      const rowWithoutQueen = slate[x].split("");
      rowWithoutQueen[y] = "-";
      slate[x] = rowWithoutQueen.join("");
    };
  
    const helper = (set, x, y, slate, arr = []) => {
      // pruning case
      if (isConflict(slate)) {
        return arr;
      }
  
      // base case
      if (x >= n && y >= n) {
        arr.push(slate.slice());
        return arr;
      }
  
      // place queen on slate at row x, column y
      placeQueenOnSlate(slate, x, y);
      // recurse and increment x
      helper(set, x + 1, y, slate, arr);
      // clear slate to clean up mess
      clearSlate(slate, x, y);
  
      helper(set, x, y + 1, slate, arr);
  
      return arr;
    };
  
    let emptyRow = "";
    for (let i = 0; i < n; i++) {
      emptyRow += "-";
    }
  
    let emptySlateOfSizeN = new Array(n).fill(emptyRow);
    return helper(n, 0, 0, emptySlateOfSizeN);
  }
console.log(find_all_arrangements(4))