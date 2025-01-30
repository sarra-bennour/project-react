export const findLong = (words) =>{ 
  //findLongestWord(words);
  console.log(words);
  let wordsWithLength = words.map(word => 
  ({ mot: word, longueur: word.length }));
let longestWord = wordsWithLength.reduce(
  (max, current) =>
  current.longueur > max.longueur ? current : max
);
console.log("wordsWithLength:", wordsWithLength);
console.log("longestWord:", longestWord);
  return longestWord;
}
