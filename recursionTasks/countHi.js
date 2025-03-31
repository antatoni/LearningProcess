let input = ["popi"];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const string = gets()
const changePi = (str) => {
    if (str.length < 2) {
        return str;
    }

    if (str.startsWith('pi')) {
        return '3.14' + changePi(str.substring(2))
    } else {
        return str[0] + changePi(str.substring(1));
    }


}
console.log(changePi(string));