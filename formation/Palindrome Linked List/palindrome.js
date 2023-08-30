/*
'''
❓ PROMPT
Given an array, create a palindrome linked list by iterating through the array forwards and backwards. *The last element should not be repeated.*

Example(s)
createPalindromeLL([99]) == "99"
createPalindromeLL([1,4,5]) == "1 -> 4 -> 5 -> 4 -> 1"
 

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
function createPalindromeLL(arr) {
def createPalindromeLL(arr: list[int]) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const createPalindromeLL = array => {
    const sentinel = new LinkedListNode("dummy");
    let currentNode = sentinel;

    for(let i = 0; i < array.length; i++){
        currentNode.next = new LinkedListNode(array[i]);
        currentNode = currentNode.next;
    }

    for(let i = array.length - 2; i >= 0; i--){
        currentNode.next = new LinkedListNode(array[i]);
        currentNode = currentNode.next;
    }

    return sentinel.next;
}

function toString(head) {
    if (!head)
      return "<empty>"
  
    let parts = []
    while(head) {
      parts.push(head.val)
      head = head.next
    }
  
    return parts.join(" -> ")
  }
  
  console.log(toString(createPalindromeLL([])) === "<empty>")
  console.log(toString(createPalindromeLL([99])))
  console.log(toString(createPalindromeLL([4,2])) === "4 -> 2 -> 4")
  console.log(toString(createPalindromeLL([1,4,5])) === "1 -> 4 -> 5 -> 4 -> 1")
  console.log(toString(createPalindromeLL([4,9,14])) === "4 -> 9 -> 14 -> 9 -> 4")
  console.log(toString(createPalindromeLL([20,15,10,5])) 
      === "20 -> 15 -> 10 -> 5 -> 10 -> 15 -> 20")
  console.log(toString(createPalindromeLL([5,5,5,5]))
      === "5 -> 5 -> 5 -> 5 -> 5 -> 5 -> 5")
  console.log(toString(createPalindromeLL([1,2,3,2,1]))
      === "1 -> 2 -> 3 -> 2 -> 1 -> 2 -> 3 -> 2 -> 1")