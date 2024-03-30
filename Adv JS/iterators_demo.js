function iterator(myArr) {
  let idx = 0;

  function next() {
    if (idx == myArr.length) {
      return { value: undefined, done: true };
    }
    console.log(idx);
    let res = { value: myArr[idx], done: false };
    idx++;
    return res;
  }

  return { next };
}

const myArr = [2, 4, 3, 1, 5, 6];

const it = iterator(myArr);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
