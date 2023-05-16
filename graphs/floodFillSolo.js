/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
    // create dfs for searching 4 directionally out from the input
    const dfs = (image, i, j, color) => {
        // update the image[i][j] to the new color IF its a value of 1
        if (image[i][j] !== 0) image[i][j] = color
        // recursively call dfs on adjacent cells
        dfs(image[i + 1][j], color)
        dfs(image[i][j + 1], color)
        dfs(image[i - 1][j], color)
        dfs(image[i][j - 1], color)
    }

    dfs(image, sr, sc, color)
    return image
};