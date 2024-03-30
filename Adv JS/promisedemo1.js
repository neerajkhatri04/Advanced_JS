// function fetchData(url) {
//   return new Promise((res, rej) => {
//     console.log("Started downloading from", url);
//     setTimeout(() => {
//       let data = "Dummy data";
//       console.log("Downloade completed");
//       res(data);
//     }, 7000);
//   });
// }

// console.log("start");
// let promiseObj = fetchData("alksdjhflkdj");
// promiseObj.then((value) => {
//   console.log("Value is", value);
// });
// console.log("end");

/**********************************************/

function fetchData(url) {
  return new Promise((res, rej) => {
    console.log("Started downloading from", url);
    setTimeout(() => {
      let data = "Dummy data";
      res(data);
      console.log("Downloade completed");
    }, 7000);
  });
}

console.log("start");
let promiseObj = fetchData("alksdjhflkdj");
promiseObj.then((value) => {
  console.log("Value is", value);
});
console.log("end");
