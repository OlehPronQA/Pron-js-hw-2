// 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
// Результат виводити в консоль.
// Перетворити рішення задач з попередньої домашки на функції.
// Всі вхідні дані що були у змінних передавайте в якості параметрів функції.

const myFunction = (season_number) => {
  if (season_number === 1) {
    return "Зима";
  } else if (season_number === 2) {
    return "Весна";
  } else if (season_number === 3) {
    return "Літо";
  } else if (season_number === 4) {
    return "Осінь";
  } else {
    return "Не дійсне значення пори року";
  }
};

myFunction(1);
let result = myFunction(1);
console.log(result);
