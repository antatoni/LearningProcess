let input = [`7 4`,
    `1 5 4 7`
];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

function shuffleNumbers(N, K, numbersToShuffle) {
    let arr = Array.from({ length: N }, (_, i) => i + 1); // Create array [1, 2, ..., N]

    for (let num of numbersToShuffle) {
        let index = arr.indexOf(num);
        if (index === -1) continue;

        let target = num % 2 === 0 ? num / 2 : Math.min(num * 2, N);
        let targetIndex = arr.indexOf(target);

        if (targetIndex !== -1 && targetIndex !== index) {
            arr.splice(index, 1); // Remove from current position
            targetIndex = arr.indexOf(target); // Recalculate index after removal
            arr.splice(targetIndex + 1, 0, num); // Insert after the target
        }
    }

    console.log(arr.join(" "));
}
const [N, K] = gets().split(' ').map(Number);
let numbersToShuffle = gets().split(' ').map(Number);

shuffleNumbers(N, K, numbersToShuffle);