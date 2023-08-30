const anagrams = [];
const createAnagrams = (string, anagrams) => {
    if(!string){
        return string;
    }

    anagrams.push(createAnagrams(string[0]) + string.slice(1));

    return anagrams;
}

console.log(createAnagrams("b"))