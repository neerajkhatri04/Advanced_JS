const EventEmitter = require("node:events");
const e = new EventEmitter();

e.on("foo", () => {
  console.log("foo 1");
});

e.on("foo", () => {
  console.log("foo 2");
});

e.on("foo", (x) => {
  console.log(`foo 3 with parameter ${x}`);
  console.log(x);
});

e.on("bar", () => {
  console.log("bar 1");
});

e.emit("foo");
e.emit("foo", "param");
e.emit("bar");
