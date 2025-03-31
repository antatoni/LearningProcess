let input = ['8',
    'AddWish Electric Scooter 2000Z;3500.05;Rayko Petrov',
    'AddWish Fortnite Skin;3000;Rayko Petrov',
    'AddWish AMD Radeon;16400;Hristo',
    'AddWish Apple AirPods;21111.50;Nadya',
    'FindWishesByChild Toshko',
    'DeleteWishes Rayko Petrov',
    'FindWishesByChild Rayko Petrov',
    'FindWishesByPriceRange 5000;30000'
];

let print = this.print || console.log;
let gets = this.gets || (
    (arr, index) => () => arr[index++])(input, 0);




const numOfCommands = Number(gets());

const dictionary = new Map();
let counter = 0;



for (let i = 0; i < numOfCommands; i++) {

    let line = gets().split(' ');
    let command = line.shift();
    line = line.join(' ').split(';')

    if (command === 'AddWish') {
        const kidName = line[line.length - 1];
        let wishObj = {
            name: line[0],
            price: line[1],
            kidName: kidName
        }
        if (dictionary.has(kidName)) {
            dictionary.get(kidName).push(wishObj);
        } else {
            dictionary.set(kidName, [wishObj]);
        }

        console.log('Wish added')
    } else if (command === 'DeleteWishes') {
        const kidName = line[0];
        if (dictionary.has(kidName)) {
            const size = dictionary.get(kidName).length
            dictionary.delete(kidName);
            console.log(`${size} Wishes deleted`);
        } else {
            console.log(`No Wishes found`)
        }

    } else if (command === 'FindWishesByPriceRange') {
        const lower = Number(line[0]);
        const higher = Number(line[1]);
        const filteredWishes = [];
        for (const [kidName, wishes] of dictionary.entries()) {
            for (const wish of wishes) {
                const price = parseFloat(wish.price);
                if (price >= lower && price <= higher) {
                    filteredWishes.push(wish);
                }
            }
        }
        filteredWishes.sort((a, b) => a.name.localeCompare(b.name));
        if (filteredWishes.length === 0) {
            console.log(`No Wishes found`);
        } else {
            filteredWishes.forEach((wish) => {
                const price = parseFloat(wish.price);
                console.log(`{${wish.name};${wish.kidName};${price.toFixed(2)}}`)
            })

        }

    } else if (command === 'FindWishesByChild') {
        const kidName = line[0];
        if (!dictionary.has(kidName)) {
            console.log(`No Wishes found`)
            continue;
        }
        const wishArr = dictionary.get(kidName);
        wishArr.sort((a, b) => a.name.localeCompare(b.name));
        wishArr.forEach((obj) => {
            const price = parseFloat(obj.price);
            console.log(`{${obj.name};${obj.kidName};${price.toFixed(2)}}`)
        })

    }
}
