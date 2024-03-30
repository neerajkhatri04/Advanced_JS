function createPromise() {
  return new Promise((resolve, reject) => {
    console.log("Resolvving the promise");
    resolve("Resolved.....");
  });
}

setTimeout(() => {
  console.log("Timer started");
}, 0);

let p = createPromise();

p.then(() => {
  console.log("Promise resolved", p);
});
