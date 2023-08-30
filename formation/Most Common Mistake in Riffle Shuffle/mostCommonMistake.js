/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with the 26 red cards in one hand and the 26 black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single 52-card deck.

You build a machine that accepts a deck of cards to automatically determine the length of your most common mistake after the merge. The most common mistake can be identified by one that is not alternating from the opposite color. For example, "B, R, B, R" would be a perfectly alternating sequence, but there is one mistake in "B, B, R, B". If there are no mistakes, then return 0.

Example(s)
Given the shuffled deck: ["R", "B", "B", "R", "R", "R", "B", "R", "B", "B"]

The following sequences of consecutive cards of the same color:

"B", "B" - Length 2
"R", "R", "R" - Length 3
"B", "B" - Length 2

Returns is 2 (for two "common" mistakes of "B", "B")
 

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
function mostCommonMistake(deck) {
def mostCommonMistake(deck: list[str]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const mostCommonMistake = deck => {
    const mistakeFrequencies = new Map();
    
    let startOfMistake = 0;

    while(startOfMistake < deck.length - 1){
        let endOfMistake = startOfMistake + 1;

        while(deck[startOfMistake] === deck[endOfMistake]){
            endOfMistake++;
        }

        const nonAlternatingSequence = deck.slice(startOfMistake, endOfMistake).join("");

        if(mistakeFrequencies.has(nonAlternatingSequence)){
            mistakeFrequencies.set(nonAlternatingSequence, mistakeFrequencies.get(nonAlternatingSequence) + 1);
        }
        else if(nonAlternatingSequence.length > 1){
            mistakeFrequencies.set(nonAlternatingSequence, 1);
        }

        startOfMistake = endOfMistake;
    }

    let highestFrequency = 0;
    let mostCommonMistake = "";

    for(const [mistake, frequency] of mistakeFrequencies.entries()){
        if(frequency > highestFrequency){
            highestFrequency = frequency;
            mostCommonMistake = mistake;
        }
    }

    return mostCommonMistake.length;
}

console.log(mostCommonMistake(["R"]) === 0);
console.log(mostCommonMistake(["R", "B"]) === 0);
console.log(mostCommonMistake(["R", "R"]) === 2);
console.log(mostCommonMistake(["R", "R", "B", "R", "B", "B", "R", "R", "B"]) === 2);
console.log(mostCommonMistake(["R", "R", "R", "B", "R", "B", "R", "R", "R", "B"]) === 3);
console.log(mostCommonMistake(["R", "R", "R", "B", "B", "R", "R", "R", "B", "B"]) === 3);
console.log(mostCommonMistake(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]) === 0);
console.log(mostCommonMistake(["R", "R", "B", "R", "R", "R", "R", "R", "B", "B"]) === 2);
console.log(mostCommonMistake(["B", "B", "B", "B", "R", "R", "R", "B", "R", "R", "R"]) === 3);
console.log(mostCommonMistake(["R", "R", "R", "B", "B", "B", "B", "R", "R", "R", "B"]) === 3);