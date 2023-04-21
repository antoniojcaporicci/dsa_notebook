function flood_fill(pixel_row, pixel_column, new_color, image) {
    const fill = (x, y, image, color, newColor) => {
        if (x < 0 || y < 0 || x > image.length-1 || y > image[0].length || image[x][y] !== color) return
        image[x][y] = newColor
        fill(x+1, y, image, color, newColor)
        fill(x, y+1, image, color, newColor)
        fill(x-1, y, image, color, newColor)
        fill(x, y-1, image, color, newColor)
    }

    fill(pixel_row, pixel_column, image, image[pixel_row][pixel_column], new_color)
    return image
}

const testVals = {
    "pixel_row": 0,
    "pixel_column": 1,
    "new_color": 2,
    "image": [
        [0, 1, 3],
        [1, 1, 1],
        [1, 5, 4]
    ]
}

console.log(flood_fill(testVals.pixel_row, testVals.pixel_column, testVals.new_color, testVals.image))
