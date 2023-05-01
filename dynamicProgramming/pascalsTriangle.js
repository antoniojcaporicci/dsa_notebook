
function find_pascal_triangle(n) {
    // build out table with known values
    const triangle = Array.from(Array(n), () => [])
    
    for (let i = 0; i < n; i++) {
        triangle[i][0] = 1
    }

    for (let j = 1; j < n; j++) {
        triangle[j][j] = 1
    }

    for (let row = 2; row < n; row++) {
        for (let column = 1; column < triangle[row].length - 1; column++) {
            triangle[row][column] = triangle[row-1][column] + triangle[row-1][column-1]
        }
    }

    return triangle
}


console.log(find_pascal_triangle(821))