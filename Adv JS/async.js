function foo() {
  for (let i = 0; i < 10000000000; i++) {}
  console.log("loop started");
}

function foof() {
  console.log("Starting timer");
  setTimeout(function exec() {
    console.log("Timer ended");
  }, 5000);
}

console.log("hi");

foo();
foof();
foo();

console.log("bye");
