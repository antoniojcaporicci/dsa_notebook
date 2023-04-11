let unsorted = [3, 2, 4, 7, 6, 9, 1, 5]

const mergeSort = (arr) => {
    const helper = (a, start, end) => {
        if (start === end) {
          return [a[start]];
        }
      
        let mid = Math.floor(start + (end - start) / 2);
        let left = helper(a, start, mid);
        let right = helper(a, mid + 1, end);
      
        let sortedArray = [];
        let leftPointer = 0;
        let rightPointer = 0;
      
        while (leftPointer < left.length && rightPointer < right.length) {
          if (left[leftPointer] < right[rightPointer]) {
            sortedArray.push(left[leftPointer]);
            leftPointer++;
          } else {
            sortedArray.push(right[rightPointer]);
            rightPointer++;
          }
        }
      
        while (leftPointer < left.length) {
          sortedArray.push(left[leftPointer]);
          leftPointer++;
        }
      
        while (rightPointer < right.length) {
          sortedArray.push(right[rightPointer]);
          rightPointer++;
        }
      
        return sortedArray;
      };
      

    return helper(arr, 0, arr.length - 1)
}


console.log(mergeSort(unsorted))