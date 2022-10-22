// const promiseObj = new Promise(() => { });

// console.log(promiseObj);


// Sleep
const funcSlept = () => {
  return 'Slept for 8hrs';
}

// simple immediate resolve
// const sleepPromise = new Promise((resolve, reject) => {
//   resolve(funcSlept());
// });

// console.log(sleepPromise);


// resolve of async operation
// const sleepPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(funcSlept());
//   }, 8000);
// });

// console.log(sleepPromise);


// setTimeout(() => {
//   console.log(sleepPromise);
// }, 10000);


// Login function

const loginFunc = (usr, pass, finishLogin, failLogin) => {
  console.log(`Posted Login API with the creds(User:${usr}, Pass:${pass}), awating for response`);
  setTimeout(() => {
    if (usr === 'sanjay' && pass === 'sanjay') {
      finishLogin({ user: 'Sanjay', email: 'sanajy@gmail.com', isLoggedIn: true }); // trigger then function
    }
    else
      failLogin({ user: 'sanjay', isLoggedIn: false });
  }, 10000);
};

const loginPromise = new Promise((resolve, reject) => {
  loginFunc('sanjay', 'saravanan', resolve, reject);
});

console.log(loginPromise);



loginPromise
  .then((value) => { // executed when the promise is fullfilled/resolved
    console.log(value);
  })
  .catch((error) => { // executed when the promise is rejected/unfullfilled
    console.log(error);
  })



