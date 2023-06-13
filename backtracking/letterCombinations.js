// Given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent.
// Return the answer in any order.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

// digits = '23'
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    let res = []

    const helper = (i, char, slate) => {
        // base case, 
        // pointer > digits.length-1
        let letters = map[digits[i]]
        if (i > digits.length - 1 || char > letters.length - 1) {
            res.push(slate.slice())
            return
        }

        // for every digit, we need to match against all possible letters
        slate.push(letters[char])
        helper(i, char + 1, slate)
        slate.pop()

        helper(i + 1, char, slate)
    }

    helper(0, 0, [])
    return res
}