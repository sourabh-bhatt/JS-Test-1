function moveZero(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[count] = num[i];
      count++;
    }
  }
  while (count < num.length) {
    num[count] = 0;
    count++;
  }
}

const num1 = [0, 1, 0, 3, 12];
moveZero(num1);
console.log(num1);

const num2 = [0];
moveZero(num2);
console.log(num2);
