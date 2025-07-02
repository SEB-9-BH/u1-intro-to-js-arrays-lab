/*Exercise 1: Define an empty array*/

const foods = [];  
console.log('Exercise 1 result:', foods);

/*Exercise 2: Add strings to the array*/

foods.push("pizza","cheeseburger");
console.log('Exercise 2 result:', foods);

/*Exercise 3: Insert at the beginning*/

foods.unshift('taco');
console.log('Exercise 3 result:', foods);

/*Exercise 4: Access an array element*/

let favFood = foods[1];
console.log('Exercise 4 result:', favFood);

/*Exercise 5: Insert an element between two others*/

foods.splice(2, 0, 'tofu')
console.log('Exercise 5 result:', foods);

/*Exercise 6: Replace elements*/

foods.splice(1, 1, 'sushi','cupcake')
console.log('Exercise 6 result:', foods);

/*Exercise 7: Using the `slice()` method*/

let yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy);

/*Exercise 8: Finding an index*/

let soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);


/*Exercise 9: Joining elements*/

let allFoods = foods.join('->')
console.log('Exercise 9 result:', allFoods);

/*Exercise 10: Check for an element*/

let hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

/*Exercise 11: Odd numbers from an array*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
    for (let num of nums) {
        if (num%2 !== 0){
            odds.push(num);            
        }

    }

console.log('Exercise 11 result:', odds);

/*Exercise 12: FizzBuzz with arrays*/

const fizz = []
const buzz = []
const fizzbuzz = []

    for (let num of nums) {
        if (num%3 === 0){
            fizz.push(num);            
        }
        if (num%5 === 0){
            buzz.push(num);
        }
        if (num%3 === 0 && num%5 === 0){
            fizzbuzz.push(num)
        }
    }

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*Exercise 13: Retrieve the Last Array*/

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

let numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);

/*Exercise 14: Accessing within nested arrays*/

let num = numArrays[2][1];
console.log('Exercise 14 result:', num);

/*Exercise 15: Nested array sum*/

let total=0;
numArrays.forEach(innerArray => {
  innerArray.forEach(number => {
    total+=num;
  });
});

console.log('Exercise 15 result:\n', total);

