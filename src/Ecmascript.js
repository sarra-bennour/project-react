export const findLongestWord = (wordsArray) => {
  if (!wordsArray || wordsArray.length === 0) return { mot: "", longueur: 0 };

  let wordsWithLength = wordsArray.map(word => ({ mot: word, longueur: word.length }));
  let longestWord = wordsWithLength.reduce((max, current) => 
      current.longueur > max.longueur ? current : max
  );

  return longestWord;
};
