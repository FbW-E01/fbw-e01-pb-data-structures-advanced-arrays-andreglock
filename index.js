const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

const ordersAmount = orders.map(function(thing) {
    return thing.amount;
});
const ordersAmountTotal = ordersAmount.reduce(function (acc, current) {
    return acc + current;
});

console.log('1:', ordersAmountTotal);

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const arrayOfNumbersIncremented = arrayOfNumbers.map(function(array) {
    return array + 1;
});

console.log('2:', arrayOfNumbersIncremented);

const filterEvens = (numbers) => {
    const evens = numbers.filter(function(number) {
        if (number % 2 === 0) { return true; }
        return false;
    });
    return evens;
};

console.log('3:', filterEvens([1,2,3,11,12,13]));
console.log('3:', filterEvens([22,2,31,110,6,13]));

const friends = ["Rika", "Jenna", "Bleda", "Oliver", "Itamar"];

const filterItems = (array, string) => {
    const item = array.filter(function(arrayItem) {
        if (arrayItem.includes(string)) {return true}
        return false;
    })
    return item;
};

console.log('4:', filterItems(friends, 'ka'));
console.log('4:', filterItems(friends, 'e'));

const sum = (sumThis) => {
    const sumAmount = sumThis.reduce(function(accumulator, current) {
        return accumulator + current;
    })
    return sumAmount;
};

console.log('5:', sum([1,2,3,4,5]));
console.log('5:', sum([6,7,7]));

const squareRoot = (array) => {
    const sqrt = array.map(function(arrayItem) {
        return Math.sqrt(arrayItem);
    })
    return sqrt;
};

console.log('6:', squareRoot([9, 16, 25, 36, 81]));