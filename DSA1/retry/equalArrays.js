
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    const counts = new Map()

    for (let item of arr1) {
        if (counts.has(item)) {
            counts.set(item, counts.get(item) + 1)
        } else {
            counts.set(item, 1);
        }
    }


    for (let item of arr2) {
        if (!counts.has(item) || counts.get(item) <= 0) {
            return false
        }
        counts.set(item, counts.get(item) - 1);
    }
    return true

}
// Пример: areArraysEqual([1, 2, 3], [3, 1, 2]) → true

console.log(areArraysEqual([1, 2, 2, 3], [3, 1, 2, 2]));