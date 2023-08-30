function bubbleSort(array) {
  for(let j = 0; j < array.length - 1; j++){
    for(let i = 0; i < array.length; i++){
    if(array[i] > array[i + 1]){
      const temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }
  }

  return array;
}

// Test Cases
console.log(bubbleSort([])) // []
console.log(bubbleSort([1])) // [1]
console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
