console.log("Start of the file");

setTimeout(() => {
  console.log("Timer 1 ");
});

for (let i = 0; i < 10000000000000; i++) {
  //something
}

let x = Promise.resolve("My promise");
x.then((value) => {
  console.log("Whose Promise? ", value);
});

setTimeout(() => {
  console.log("Timer 2 done");
});

console.log("End of the file");
