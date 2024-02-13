// 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.

//     Наприклад:
//     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
//     const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
//     const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

//     const arr = [[1, 2], [3, 4], [5, 6, 7]];

//     let product = 1;

//     // тут має бути ваше рішення

//     console.log(product);

    const arr = [[1, 2], [3, 4], [5, 6, 7]];
    let product = 1;
    
    for(i = 0; i < arr.length; i++){
      for(j = 0; j < arr[i].length; j++)
      product = product * arr[i][j]
    }
    
    console.log(product)

    // у функції


    const myFunction = () => {
      const arr1 = [[1, 2], [3, 4], [5, 6, 7]];
      let product1 = 1;
      
      for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr1[i].length; j++)
        product1 = product1 * arr1[i][j]
      }
      
      return product1
    }

    myFunction();
    let result = myFunction();
    console.log(result)
   

