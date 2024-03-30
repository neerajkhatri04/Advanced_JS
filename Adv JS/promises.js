function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function promiseWithTimeOut() {
  return new Promise((resolve, reject) => {
    let num = getRandomNumber(100);
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 3000);
  });
}

let y = promiseWithTimeOut();
y.then((result) => {
  console.log("Resolved:", result);
}).catch((error) => {
  console.log("Rejected:", error);
});
