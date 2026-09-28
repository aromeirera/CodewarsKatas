// Write a function that takes in a string of one or more words,
//  and returns the same string, but with all words that have five
//  or more letters reversed (just like the name of this kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
function spinWords(words) {
    let sentence=words.split(" ");
    let results;
    for (let i of sentence){
        if (sentence.length>=4){
            return sentence.reverse(i);
        }
        results.push(sentence.join(" "));
    }
    return results;
}
console.log(spinWords("Hey wollef sroirraw"))
// function spinWords(string){
//  let letters = string.split(" ");
//  let reversed=[];
// // console.log( letters);
//  for ( let i of letters)
//     if (i.length>=5){
//         let word = i.split("");
//         word.reverse();
//          reversed.push(word.join(""));
//      }
//     else {
//         reversed.push(i);
//     }
// return reversed.join(" ");
// }
//     console.log ( spinWords( "This is a test "));

