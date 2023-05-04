function isValid(s) {
    let stack = []

    let openers = '({['
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (openers.includes(s[i])) {
            stack.push(s[i])
        } else {
            // if we get a closer, pop off the top of the stack and compare
            // if the closer matches the opener, continue
            // otherwise, return false
            let potentialMatch = stack.pop()

            if (pairs[potentialMatch] !== s[i]) {
                return false
            }
        }
    }
    return stack.length ? false : true
}

console.log(isValid('([]'))