class Trie {
    constructor(char) {
        this.char = char
        this.children = {}
        this.complete = false
    }

    insert = (word) => {
        // otherwise, trie becomes Trie.children[w]
        // then repeat step one with ord
        const helper = (trie, partial) => {
            // base case
            if (!partial.length) {
                trie.complete = true
                return this
            }

            let firstChar = partial.substring(0, 1)
            let restOfChars = partial.substring(1)

            let currTrie = trie
            let nextTrie

            if (currTrie.children[firstChar]) {
                nextTrie = currTrie.children[firstChar]
            } else {
                nextTrie = new Trie(firstChar)
                currTrie.children[firstChar] = nextTrie
            }

            helper(nextTrie, restOfChars)
            return this
        }

        return helper(this, word)
    }

    trieTraversal = (word, mustBeComplete) => {
        let exists = false

        const helper = (trie, partial, mustBeComplete) => {
            if (!partial.length) {
                if (mustBeComplete && trie.complete === true || !mustBeComplete && trie.complete !== true) {
                    exists = true
                }
                return
            }

            let firstChar = partial.substring(0, 1)
            let restOfChars = partial.substring(1)

            if (trie.children[firstChar]) {
                helper(trie.children[firstChar], restOfChars, mustBeComplete)
            } else {
                return
            }
        }

        helper(this, word, mustBeComplete)
        return exists
    }

    search = (word) => {
        return this.trieTraversal(word, true)
    }

    startsWith = (word) => {
        return this.trieTraversal(word, false)
    }
}

const testTrie = new Trie()

testTrie.insert('word')
testTrie.insert('work')
console.log(testTrie.startsWith('wo'))
