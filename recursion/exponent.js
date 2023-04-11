function calculate_power(a, b) {
    const helper = (base, exponent) => {
        if (exponent === 0) {
            return 1
        } else if (exponent === 1) {
            return base
        }


        if (exponent % 2 === 1) {
            return helper(base, Math.floor(exponent/2)) * helper(base, Math.ceil(exponent/2))
        } else {
            return helper(base, exponent/2) * helper(base, exponent/2)
        }
    }

    return helper(a,b) % 1000000007
}

console.log(calculate_power(2,100))