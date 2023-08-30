/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.

Note:
• Indexes (indices) follow the zero-based numbering rule (i.e. the index of the first element of an array is 0, not 1).
• Other versions of this problem sometimes return true or false, the item being found in the array or not.

Examples:
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8
• Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1
*/

function binarySearch(array, target) {
    let lowerBound = 0;
    let upperBound = array.length;
    let midpoint = Math.floor((upperBound - lowerBound) / 2);

    while(lowerBound <= upperBound){
        if(target === array[midpoint]){
            return midpoint;
        }

        if(target < array[midpoint]){
            upperBound = midpoint - 1;
        }
        else{
            lowerBound = midpoint + 1;
        }

        midpoint = Math.floor((lowerBound + upperBound) / 2);
    }

    return -1;
}

// Test Cases
var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1