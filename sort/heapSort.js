let unsorted = [3, 2, 4, 7, 6, 9, 1, 5]

const heapSort = (array) => {
    const swap = (a, startIndex, endIndex) => {
        [a[startIndex], a[endIndex]] = [a[endIndex], a[startIndex]]
    }

    const heapify = (a, index, size) => {
        let largest = index
        let leftChild = (index * 2) + 1
        let rightChild = (index * 2) + 2

        if (leftChild < size && a[largest] < a[leftChild]) {
            largest = leftChild
        }
        if (rightChild < size && a[largest] < a[rightChild]) {
            largest = rightChild
        }
        if (index !== largest) {
            swap(a, index, largest)
            heapify(a, largest, size)
        }

        return a
    }

    // build heapSort
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, i, array.length)
    }

    // extract elements from heapSort
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)
        heapify(array, 0, i)
    }

    return array;
}
