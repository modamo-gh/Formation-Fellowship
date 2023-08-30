/*
'''
❓ PROMPT
Given an array of strings, group all anagrams together in an array and return an array of these groups.

Example(s)
Input: ["bat", "cat", "tab", "car", "atb"]
Output: [["bat", "tab", "atb"], ["cat"], ["car"]]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
func groupAnagrams(input: [String]) => [[String]]:
def groupAnagrams(words: list[str]) -> list[list[str]]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const groupAnagrams = strings => {
    const sortedLettersToString = new Map();

    for(const string of strings){
        let sortedLetters = string.split("").sort().join("");
        
        if(!sortedLettersToString.has(sortedLetters)){
            sortedLettersToString.set(sortedLetters, [string]);
        }
        else{
            const currentAnagrams = sortedLettersToString.get(sortedLetters);
            currentAnagrams.push(string);

            sortedLettersToString.set(sortedLetters, currentAnagrams);
        }
    }

    const sortedLettersToStringArray = [];

    for(const anagrams of sortedLettersToString.values()){
        sortedLettersToStringArray.push(anagrams);
    }

    return sortedLettersToStringArray;
}

// Test Case 1: Basic usage
const words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result1 = groupAnagrams(words1);
console.log(result1.length === 3); // Output: true
// Verify the contents of 1.
console.log(result1.some(group => group.sort().join() === ["eat", "tea", "ate"].sort().join())); // Output: true
console.log(result1.some(group => group.sort().join() === ["tan", "nat"].sort().join())); // Output: true
console.log(result1.some(group => group.sort().join() === ["bat"].sort().join())); // Output: true

// Test Case 2: Empty input
const words2 = [];
const result2 = groupAnagrams(words2);
console.log(result2.length === 0); // Output: true

// Test Case 3: No anagrams
const words3 = ["abc", "def", "ghi", "jkl"];
const result3 = groupAnagrams(words3);
console.log(result3.length === 4); // Output: true
// Verify the contents of 3.
console.log(result3.every(group => group.length === 1)); // Output: true

// Test Case 4: All words are anagrams
const words4 = ["abc", "cab", "bca", "acb"];
const result4 = groupAnagrams(words4);
console.log(result4.length === 1); // Output: true
// Verify the contents of 4.
console.log(result4[0].sort().join() === words4.sort().join()); // Output: true

// Test Case 5: Multiple groups of anagrams with different lengths
const words5 = ["abc", "cab", "bca", "xyz", "zyx", "acb", "yxz", "def", "fed"];
const result5 = groupAnagrams(words5);
console.log(result5.length === 3); // Output: true
// Verify the contents of 5.
console.log(result5.some(group => group.sort().join() === ["abc", "cab", "bca", "acb"].sort().join())); // Output: true
console.log(result5.some(group => group.sort().join() === ["xyz", "zyx", "yxz"].sort().join())); // Output: true
console.log(result5.some(group => group.sort().join() === ["def", "fed"].sort().join())); // Output: true