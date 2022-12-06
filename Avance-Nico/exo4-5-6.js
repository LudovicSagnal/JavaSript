const arr = [];

for(let i = 0; i<10; i++) {
    arr.push(Math.round((Math.random()*50)));
}
console.log(arr);

const result = arr.filter(function(arr) {
    return arr > 10;
});

console.log(result);

const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);