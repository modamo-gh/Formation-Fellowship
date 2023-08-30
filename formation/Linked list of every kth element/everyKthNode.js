/*
'''
❓ PROMPT
Given a linked list and a target k, return a linked list containing every kth element.

Example(s)
head = 1 -> 3 -> 6 -> 2 -> 8 -> 9
everyKthNode(head, 3) == "6 -> 9"
 

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
function everyKthNode(node, target) {
def everyKthNode(node: Node, target: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

const everyKthNode = (head, k) => {
    const resultList = new Node("");
    let currentResultNode = resultList;
    let count = 1;
    let currentOriginalNode = head;

    while(currentOriginalNode && k > 0){
        if(count === k){
            currentResultNode.next = new Node(currentOriginalNode.value);
            currentResultNode = currentResultNode.next;
            count = 1;
        }
        else {
            count++;
        }

        currentOriginalNode = currentOriginalNode.next;
    }

    return resultList.next;
}

let head = new Node(1, new Node(3, new Node(6, new Node(2, new Node(8, new Node(9))))))

console.log(everyKthNode(head, 3));
console.log(everyKthNode(head, 1));
console.log(everyKthNode(head, 5));
console.log(everyKthNode(head, 6));
console.log(everyKthNode(head, 7));

head = new Node(6)

console.log(everyKthNode(head, 1));
console.log(everyKthNode(head, 20));