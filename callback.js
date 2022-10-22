
// simply it is not a callback function
// const func1 = () => {
//   console.log('Simple Function');
// }


// // the we execute a function decides on the callback or not

// const func2 = () => {
//   func1(); // simple invoking another function this is not callback
// }


// const func3 = (sampleFunc) => {
//   sampleFunc(); // callback function execution
// }

// func3(func1);


// Input ['Foot', 'Base', 'Volley', 'Basket']


// Football
// Baseball
//
// Basketball


const arr = ['Foot', 'Base', 'Volley', 'Basket'];


// forEach ---> simple iteration without any return value


// unnamed/anonymous callback func
// arr.forEach(
//   (value) => {
//     console.log(`${value}ball`);
//   }
// );

// Named Callback function
// const funcBall = (value) => {
//   console.log(`${value}ball`);
//   return `${value}ball`;
// }

// arr.forEach(funcBall);


// Input ['Foot', 'Base', 'Volley', 'Basket']

// Output ['Football', 'Baseball', 'Volleyball', 'Basketball']

// console.log(arr.map(funcBall));

// addEventListener
// setTimeout
// setInterval

console.log('Line 1');


setTimeout(() => {
  console.log('Line 2');
}, 5000);

console.log('Line 3')

setTimeout(() => {
  console.log('Line 4');
}, 3000);



// Output



