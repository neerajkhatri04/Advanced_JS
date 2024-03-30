/***********Inversion of control************/

// function download(url, cb) {
//   console.log("Starting download from", url);
//   setTimeout(() => {
//     console.log("Download completed");
//     let content = "Movie";
//     cb(content);
//     cb(content);
//   }, 7000);
// }

// download("www.xyz.com", (data) => {
//   console.log(data, "is downloaded");
// });

/****************************handle by promises***********************/

function download(url) {
  console.log("Starting download from", url);
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Download completed");
      let content = "Movie";
      res(content);
    }, 7000);
  });
}

download("www.xyz.com").then((data) => {
  console.log(data, "is downloaded");
});
