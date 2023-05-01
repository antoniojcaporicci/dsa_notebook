const divide = (a, b) => {
    return a/b
}

console.log(divide(10, 5))

divide(a,b).then((result) => {
    console.log(`division result: ${result}`)
}).catch((error) => {
    console.log('error: ', error)
})