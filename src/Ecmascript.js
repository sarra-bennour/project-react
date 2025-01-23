const findLongestWord = (words) => {
    let [firstWord, ...restWords] = words;
    const wordsWithLength = words.map(word => ({
      mot: word,
      longueur: word.length
    }));
    const longestWordObj = wordsWithLength.reduce((longest, current) => 
      current.longueur > longest.longueur ? current : longest
    );
    return [longestWordObj.mot, longestWordObj.longueur];
  };
  
  const result = findLongestWord(["chat", "éléphant", "girafe", "hippopotame"]);
  console.log(result); 
  