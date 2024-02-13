// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

//     const arr = [ [1, 2], [3, 4], [5, 6] ];

//     Console output:
//     1
//     2
//     3
//     4
//     5
//     6

// Метод forEach 
const arr4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
 

arr4.forEach((subArr) => {
  subArr.forEach((element) => {
    console.log(element);
  });
});

// Цикл for (взяв ішні значення, щоб розібратися, бо числа від 1 до 6 вводили в оману через індексацію)

const arr = [
  ["abc", 555],
  [true, 777],
  [999, 56],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


// У функції // Не зрозуміло чому це не працює в функції?

const myFunction = () => {
  const arr1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      return (arr1[i][j]);
    }
  }
};

myFunction();
let result = myFunction();
console.log(result);

