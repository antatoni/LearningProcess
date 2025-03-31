let input = [`1122`,
    `A1B12C11D2`];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);

const secret = gets();
const cypher = gets();

function decodeSecretCode(secret, cypher) {
    const cypherObj = {};
    let i = 0;
    while (i < cypher.length) {
        const letter = cypher[i];
        i++;
        let code = '';
        while (i < cypher.length && /\d/.test(cypher[i])) {
            code += cypher[i];
            i++;
        }
        cypherObj[letter] = code;
    }

    const results = [];
    function backtrack(index, path) {
        if (index === secret.length) {
            results.push(path);
            return;
        }
        for (const [letter, code] of Object.entries(cypherObj)) {
            if (secret.startsWith(code, index)) {
                backtrack(index + code.length, path + letter);
            }
        }
    }

    backtrack(0, '');

    results.sort();

    console.log(results.length);
    results.forEach(message => console.log(message));
}

decodeSecretCode(secret, cypher)
