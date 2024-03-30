// Higer order function -> There are function that take another function as an argument called as higher order functions.

function f(x, fun) {
  console.log(x);
  console.log(fun);
  fun();
}

f(10, function fun2() {
  console.log("Hello, world!");
});

/*****************sort() is higher order function*******************/

var arr = [4, 1, 2, 5, 7, 3, 9, 0, 6];

//sort in increasing order:
//if function return negative then a will be placed before b.
arr.sort((a, b) => a - b);
console.log(arr);
