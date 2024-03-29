function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i]; // Pick the current element to insert
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert current at the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage
const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);

const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
