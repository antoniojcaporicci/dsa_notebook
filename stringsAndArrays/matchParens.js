const matchParens = (parens) => {
    const helper = (r, l, slate, res = []) => {
        // backtrack case, pruning call stack if you have more right parens
        if (r.length > l.length || r.length < 0 || l.length < 0) {
            return
        }
        
        // base case
        if (r.length === 0 && l.length === 0) {
            res.push(slate.slice())
            return
        }

        // two options, left paren or right paren
        slate.push(')')
        helper(r.pop(), l, slate, res)
        slate.pop()

        slate.push('(')
        helper(r, l.pop(), slate, res)
        slate.pop()
    }

    return helper(new Array(parens).fill(')'), new Array(parens).fill('('), [])
}

matchParens(3)