const sortSquareMatrix = squareMatrix => {
    const flattenedMatrix = squareMatrix.flat();

    const sortedIntegers = mergeSort(flattenedMatrix);

    for(let i = 0; i < squareMatrix.length; i++){
        for(let j = 0; j < squareMatrix[i].length; j++){
            squareMatrix[i][j] = sortedIntegers[squareMatrix.length * i + j]
        }
    }
}

const mergeSort = integers => {
    if(integers.length === 1){
        return integers;
    }

    const middle = Math.floor(integers.length / 2);
    const sortedLeft = mergeSort(integers.slice(0, middle));
    const sortedRight = mergeSort(integers.slice(middle));

    let sortedIntegers = [];

    let i = 0;
    let j = 0;

    while(i < sortedLeft.length && j < sortedRight.length){
        if(sortedLeft[i] < sortedRight[j]){
            sortedIntegers.push(sortedLeft[i]);
            i++;
        }
        else{
            sortedIntegers.push(sortedRight[j]);
            j++;
        }
    }

    if(i < sortedLeft.length){
        sortedIntegers = sortedIntegers.concat(sortedLeft.slice(i));
    }

    if(j < sortedRight.length){
        sortedIntegers = sortedIntegers.concat(sortedRight.slice(j));
    }

    return sortedIntegers;
}

const squareMatrix = [
    [6, 4, 7],
    [1, 3, 2],
    [8, 9, 5]
]

console.log(squareMatrix);

sortSquareMatrix(squareMatrix);

console.log(squareMatrix)