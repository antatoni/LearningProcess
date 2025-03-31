function removeDuplicates(arr) {
    const set = new Set(arr);
    return set;
}

console.log(removeDuplicates([1, 2, 3, 3, 3, 4]));