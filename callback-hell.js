// const func1 = () => {
//   console.log('Log from Func1');
//   return 'Func1'
// }

// const func2 = (samFunc1) => {
//   console.log('Execution of callback', samFunc1());
//   console.log('Log from func2');
//   return 'Func2'
// }

// const func3 = (samFunc2) => {
//   console.log('Execution of callback', samFunc2(func1));
//   console.log('Log from func3');
//   return 'Func3'
// }

// const func4 = (samFunc3) => {
//   console.log('Execution of callback', samFunc3(func2));
//   console.log('Log from func4');
//   return 'Func4'
// }

// func4(func3);

const h1Ele = document.createElement('h1');

document.body.style.textAlign = 'center';

document.body.append(h1Ele);

// Implement backwards using setInterval
// var countDown = 10;

// const intervalId = setInterval(() => {
//   h1Ele.innerText = '';
//   h1Ele.innerText = countDown;
//   countDown--;
// }, 1000);


// setTimeout(() => {
//   clearInterval(intervalId);
//   h1Ele.innerText = '';
//   h1Ele.innerText = "Happy Diwali";
// }, 10000);



// Implement backwards count without using setInterval
var countDown = 6;
setTimeout(() => {
  h1Ele.innerText = '';
  h1Ele.innerText = countDown;
  countDown--;
  setTimeout(() => {
    h1Ele.innerText = '';
    h1Ele.innerText = countDown;
    setTimeout(() => {
      h1Ele.innerText = '';
      h1Ele.innerText = countDown;
      countDown--;
      setTimeout(() => {
        h1Ele.innerText = '';
        h1Ele.innerText = countDown;
        countDown--;
        setTimeout(() => {
          h1Ele.innerText = '';
          h1Ele.innerText = countDown;
          countDown--;
          setTimeout(() => {
            h1Ele.innerText = '';
            h1Ele.innerText = countDown;
            countDown--;
            setTimeout(() => {
              h1Ele.innerText = '';
              h1Ele.innerText = 'Happy Diwali';
              countDown--;
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

