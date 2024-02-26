// 9. Напишіть 2 цикли.
//    За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//    За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
//    Перетворити рішення задач з попередньої домашки на функції.
//    Всі вхідні дані що були у змінних передавайте в якості параметрів функції.

let evenNumbers1 = [];

for (let i = 1; i <= 9; i++) {
  if (i % 2 == 0) {
    evenNumbers1.push(i);
  }
}

console.log(evenNumbers1);

// ----------------------------------------------------
let oddNumbers1 = [];

for (let i = 1; i <= 9; i++) {
  if (!(i % 2 == 0)) {
    oddNumbers1.push(i);
  }
}

console.log(oddNumbers1);

// ---------------------------------------------------------

// У функції

const myFunction = () => {
  let evenNumbers = [];

  for (let i = 1; i <= 9; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
};

myFunction();
let result = myFunction();
console.log(result);

// ---------------------------------------------------------------------------

const myFunction2 = () => {
  let oddNumbers = [];

  for (let i = 1; i <= 9; i++) {
    if (!(i % 2 == 0)) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
};

myFunction2();
let result2 = myFunction2();
console.log(result2);