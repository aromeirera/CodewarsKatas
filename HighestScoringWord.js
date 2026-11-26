// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
// function high(x){
//     let words = x.split(' ');
//     let maxScore = 0;
//     let highestWord = '';

//     for (let word of words) {
//         let score = 0;
//         for (let char of word) {
//             score += char.charCodeAt(0) - 96; // 'a' has ASCII value 97, so subtracting 96 gives us 1
//         }
//         if (score > maxScore) {
//             maxScore = score;
//             highestWord = word;
//         }
//     }

//     return highestWord;
// }
function high(x) {
  let words = x.split(" ");

  let alphabet = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };

  let highestScore = 0;
  let highestWord = "";

  for (let i = 0; i < words.length; i++) {
    let score = 0;

    for (let j = 0; j < words[i].length; j++) {
      score += alphabet[words[i][j]];
    }

    if (score > highestScore) {
      highestScore = score;
      console.log(highestScore);
      highestWord = words[i];
      console.log(highestWord);
    }
  }

  return highestWord;
}
console.log(high("man i need a taxi up to ubud")); 