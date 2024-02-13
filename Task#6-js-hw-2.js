// 6.  Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.
// Перетворити рішення задач з попередньої домашки на функції. 
// Всі вхідні дані що були у змінних передавайте в якості параметрів функції.

const myFunction = (week) => {
  switch (week) {
    case 1:
      return "week = 1";
    case 2:
      return "week = 2";
    case 3:
      return "week = 3";
    case 4:
      return "week = 4";
    default:
      return "there is no such week";
  }
};

myFunction(1);
let result = myFunction(1);
console.log(result);
