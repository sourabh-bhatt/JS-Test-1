function findsquareRoot(x) {
  let low = 0;
  let high = x;
  while (low < high - 1) {
    const mid = (low + high) >> 1;
    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return low;
}

// Example 1;
const y = 4;
const squareRoot = findsquareRoot(y);
console.log("The square root of", y, "is: ");
console.log(squareRoot);

// Example 2;
const x = 8;
const squareRoots = findsquareRoot(x);
console.log("The square root of", x, "is: ");
console.log(squareRoots);
