// 10. Оголоcіть та ініціалізуйте змінну total = 0.
//     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
//     const myArr = [2, 3, 4, 5, 6];

// let arr3 = [2, 4, 6, 8];
// let total3 = 0;

// let i = 0;
// total3 = total3 + arr3[i];
// i++;
// total3 = total3 + arr3[i];
// i++;
// total3 = total3 + arr3[i];
// i++;
// total3 = total3 + arr3[i];
// i++;
// console.log(total3);


let arr = [2, 4, 6, 8];
let total = 0;

for (i = 0; i < arr.length; i++) {
  total = total + arr[i];
}

console.log(total);

// ----------------------------------------------------------------------
// у функції

const myFunction = () => {
  let arr2 = [2, 4, 6, 8];
  let total2 = 0;

  for (i = 0; i < arr2.length; i++) {
    total2 = total2 + arr2[i];
  }
  return total2;
};

myFunction();
let result = myFunction();
console.log(result);
