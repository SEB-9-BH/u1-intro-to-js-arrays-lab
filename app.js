//2
const foods = ['Pizza', 'Cheeseburger']
console.log('Exercise 2 result:', foods)

//3
foods.unshift('Taco')
console.log(foods)

//4
favFood = foods[1]
console.log(favFood)

//5
foods.splice(2, 0, 'tofu')
console.log(foods)

//6
foods.splice(1,1,'sushi', 'cupcake')
console.log(foods)

//7
yummy = foods.slice(1,3)
console.log(yummy)

//8
soyIdx = foods.indexOf('tofu')
console.log(soyIdx)

//9
allFoods=foods.join(' -> ')
console.log(allFoods)

//10
hasSoup = foods.includes('soup')
console.log(hasSoup)

//11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
for (i =0; i < nums.length ; i++ ) {
    if (nums[i]%2 === 1) {
        odds.push(nums[i])
        
    }
}
console.log(odds)

//12
const fizzbuzz = []
const fizz = []
const buzz = []
for ( i = 0; i < nums.length; i++) {
    if (nums[i]%3 === 0 && nums[i]%5 === 0){
        fizzbuzz.push(nums[i])
       
    }
    if(nums[i]%3 === 0 ){
        fizz.push(nums[i])
    }
    if(nums[i]%5 === 0){
        buzz.push(nums[i])
    }
        

}
console.log(fizzbuzz)
console.log(fizz)
console.log(buzz)

//13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numlist = numArrays[numArrays.length-1]

console.log(numlist)

//14
const num = numArrays[2][1]
console.log(num)

//15
total = 0
numArrays.forEach(singleArray => {
    singleArray.forEach(num =>{
        total += num
    })
})

    console.log(total)
