function* generator() {
  console.log("inside generator");
  const x = 10;
  yield 11;
  console.log("Enter after the yield");
  const y = x + (yield 30);
  console.log("Value of y is", y);
}

console.log("starting generator");
const iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next(10));
console.log(iter.next(150));
