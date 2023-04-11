function generate_palindromic_decompositions(s) {
    const isPalindrome = (subset) => {
      let leftPointer = 0;
      let rightPointer = subset.length - 1;
      let subsetIsPalindrome = true;
  
      while (leftPointer < rightPointer) {
        if (subset[leftPointer] === subset[rightPointer]) {
          leftPointer++;
          rightPointer--;
        } else {
          subsetIsPalindrome = false;
          break;
        }
      }
  
      return subsetIsPalindrome;
    };
  
    const helper = (palindrome, i, slate, arr = []) => {
      // base case
      if (i >= palindrome.length) {
        arr.push(slate.slice().join("|"));
        return arr;
      }
  
      // loop over all possible substring lengths
      for (let j = i + 1; j <= palindrome.length; j++) {
        let subset = palindrome.slice(i, j);
  
        if (isPalindrome(subset)) {
          // add subset onto slate, recurse
          slate.push(subset);
          helper(palindrome, j, slate, arr);
          slate.pop();
        }
      }
  
      return arr;
    };
  
    return helper(s, 0, [], []);
  }
  


console.log(generate_palindromic_decompositions('abracadabra'))

// function allPalindromicDecompositions(s) {
//     let res = [];
//     decompose(s, [], res);
//     return res;
//   }
  
//   function decompose(s, currDecomp, res) {
//     if (!s.length) {
//       res.push(currDecomp.join("|"));
//       return;
//     }
    
//     for (let i = 1; i <= s.length; i++) {
//       let prefix = s.slice(0, i);
//       if (prefix === prefix.split("").reverse().join("")) {
//         decompose(s.slice(i), [...currDecomp, prefix], res);
//       }
//     }
//   }
  
// console.log(allPalindromicDecompositions('abracadabra'))
