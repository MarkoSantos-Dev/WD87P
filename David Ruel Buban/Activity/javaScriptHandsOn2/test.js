// let numSeven = 10;
// let numEight = 5;

// if (numSeven > numEight) {
//     console.log(`numEight is less than numSeven ${typeof(numSeven > numEight)}`);
// } else {
//     numEight < numSeven ? console.log(`numEight is less than numSeven ${typeof(numEight < numSeven)}`) : null;
// }

// let detonate = [];

// for (let i = 0; i <= 0; i++) {
//     detonate.push('Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz');
// }console.log(`detonate array ${detonate} type of ${typeof(detonate)}`);

// dynamic test for loop.
let todetonate = ['Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz'];
let detonate = [];

for (let i = 0; i < todetonate.length; i++) {
    // detonate.push('Rian', 'Camz', 'RianCamz', 'Rian&Camz', 'Rian Camz');
    detonate.push(todetonate[i]);
}
console.log(`detonate array ${detonate} type of ${typeof(detonate)}`);