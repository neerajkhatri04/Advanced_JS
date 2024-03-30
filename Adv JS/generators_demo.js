function* generator() {
  console.log("Step 1 is executed");
  console.log("Step 1.1 is executed");
  yield 1;
  yield 2;
  console.log("Step 2 is executed");
  yield 3;
  console.log("Step 3 is executed");
  yield 4;
}

const gen = generator();
console.log(gen);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
