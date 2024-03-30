const linearSearch = function search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) return arr[i];
  }
  return undefined;
};

const binarySearch = function search(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] < k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else return arr[mid];
  }
  return undefined;
};

module.exports = {
  linearSearch,
  binarySearch,
};
