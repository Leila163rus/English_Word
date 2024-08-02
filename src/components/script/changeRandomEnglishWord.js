export function changeRandomEnglishWord(level, englishWord, setRandomEnglishWord, shuffleArray) {
  switch(level) {
    case '1 уровень':
      setRandomEnglishWord(shuffleArray([...englishWord.slice(0, 7)]));
      break;
    case '2 уровень':
      setRandomEnglishWord(shuffleArray([...englishWord.slice(7, 14)]));
      break;
    case '3 уровень':
      setRandomEnglishWord(shuffleArray([...englishWord.slice(14, 21)]));
      break;
    case '4 уровень':
      setRandomEnglishWord(shuffleArray([...englishWord.slice(21, 28)]));
      break;
    case '5 уровень':
      setRandomEnglishWord(shuffleArray([...englishWord.slice(28, 35)]));
      break;
    //no default
  }
}