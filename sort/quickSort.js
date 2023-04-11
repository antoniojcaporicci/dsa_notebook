let unsorted = [2, 4, 7, 6, 9, 1] // 3

const quickSort = (arr) => {
    const swap = (a, startIndex, endIndex) => {
        [a[startIndex], a[endIndex]] = [a[endIndex], a[startIndex]]
    }

    const partition = (items, left, right) => {
        let pivot = items[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    const sort = (items, left, right) => {
        let index;
        if (items.length > 1) {
            index = partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                sort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                sort(items, index, right);
            }
        }
        return items;
    }
    return sort(arr, 0, arr.length-1)
}


console.log(quickSort(unsorted))