const sortSquareMatrix = squareMatrix => {
    if(squareMatrix.length){
        let sortedI = 0;
        let sortedJ = 0;

        while(sortedI !== squareMatrix.length - 1 || sortedJ !== squareMatrix[0].length - 1){
            const adjacentIntegerCoordinates = getAdjacentIntegerCoordinates(sortedI, sortedJ, squareMatrix);
            const adjacentI = adjacentIntegerCoordinates[0];
            const adjacentJ = adjacentIntegerCoordinates[1];

            if(squareMatrix[sortedI][sortedJ] > squareMatrix[adjacentI][adjacentJ]){
                const temp = squareMatrix[sortedI][sortedJ];
                squareMatrix[sortedI][sortedJ] = squareMatrix[adjacentI][adjacentJ];
                squareMatrix[adjacentI][adjacentJ] = temp;

                sortedI = 0;
                sortedJ = 0;
            }
            else{
                sortedI = adjacentI;
                sortedJ = adjacentJ;
            }
        }
    }
}

const getAdjacentIntegerCoordinates = (sortedI, sortedJ, squareMatrix) => {
    if(sortedJ + 1 < squareMatrix[0].length){
        return [sortedI, sortedJ + 1];
    }
    else{
        return [sortedI + 1, 0];
    }
}

const squareMatrix = [
    [6, 4, 7],
    [1, 3, 2],
    [8, 9, 5]
]

sortSquareMatrix(squareMatrix);

console.log(squareMatrix);