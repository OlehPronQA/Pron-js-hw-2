// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.
// Перетворити рішення задач з попередньої домашки на функції.
// Всі вхідні дані що були у змінних передавайте в якості параметрів функції.

// let arr = [];

// for (let i = 1; i <= 5; i++) {
//   arr.push(i);
// }

// console.log(arr);

const myFunction = () => {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    arr.push(i);
  }
  return arr;
};

myFunction();
let result = myFunction();
console.log(result);
