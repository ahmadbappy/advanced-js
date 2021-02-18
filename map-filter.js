const numbers = [3, 4, 5, 6, 7, 8];
const names = ['Ahmad', 'Tarique', 'Hasan', 'Bappy'];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const output = numbers.map(function (element) {
//     return element * element;
// });

// const output = numbers.map(element => element - 1);

// const output = names.map(name => name.toUpperCase());

const output = numbers.filter(element => element > 5);

console.log(output);