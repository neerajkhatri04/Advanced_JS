function download(url, cb) {
  console.log("Data downloading");
  setTimeout(() => {
    console.log("Data downloaded");
    let content = "Movie";
    cb(content);
  }, 4000);
}

function write(content, cb) {
  console.log("Writing data in filename", filename);
  setTimeout(() => {
    console.log("Data is written in the file");
    const filename = "text.txt";
    cb(filename);
  }, 4000);
}

function uplode(url, filename, cb) {
  console.log("Uploading the file in url:", url);
  setTimeout(() => {
    console.log("Upload completed successfully");
    cb(filename);
  }, 2000);
}

download("www.xyx.com", (content, cb2) => {
  console.log("Content is", content);
});
