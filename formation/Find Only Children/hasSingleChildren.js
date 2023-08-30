/*
'''
❓ PROMPT
Given a binary tree, find all nodes that have only one child. Return an array of node values representing each single-child parent in any order.

Example(s)
           1
       2       3
     _   4   _   _
    
should return [2]

           12
       3       4
    1    _   6   _
    
should return [3, 4]

           12
       3       4
    1    _   6   _
  9  _      _ _
    
should return [3, 1, 4]
 

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
function hasSingleChildren(root) {
def hasSingleChildren(root: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const hasSingleChildren = root => {
    const singleParents = [];
    const queue = [root];
    let index = 0;

    while(index < queue.length){
        if(queue[index]){
            if((queue[index].left && !queue[index].right) || (!queue[index].left && queue[index].right)){
                singleParents.push(queue[index].value);
            }
    
            if(queue[index].left){
                queue.push(queue[index].left);
            }
    
            if(queue[index].right){
                queue.push(queue[index].right);
            }
        }

        index++;
    }

    return singleParents;
}

console.log(JSON.stringify(hasSingleChildren(null)))

let root = new Node(1)
console.log(JSON.stringify(hasSingleChildren(root)))

//   1
// 2
root = new Node(1,
  new Node(2))
console.log(JSON.stringify(hasSingleChildren(root)))

//   1
// 2   3
root = new Node(1,
  new Node(2),
  new Node(3))
console.log(JSON.stringify(hasSingleChildren(root)))

//     1
//  2     3
// _ 4   _ _
root = new Node(1,
  new Node(2,
    null,
    new Node(4)),
  new Node(3))
console.log(JSON.stringify(hasSingleChildren(root)))

//     12
//  3     4
// 1 _   6 _
root = new Node(12,
  new Node(3,
    new Node(1)),
  new Node(4,
    new Node(6)))
console.log(JSON.stringify(hasSingleChildren(root).sort()))

//     12
//   3     4
//  1 _   6  _
// 9 _   _ _
root.left.left.left = new Node(9)
console.log(JSON.stringify(hasSingleChildren(root).sort()))