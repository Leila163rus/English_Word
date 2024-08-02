export function changeRandomRussianhWord(level, russianWord, setRandomRussianhWord, shuffleArray) {
  switch(level) {
    case '1 уровень':
      setRandomRussianhWord(shuffleArray([...russianWord.slice(0, 7)]));
     break;
    case '2 уровень':
      setRandomRussianhWord(shuffleArray([...russianWord.slice(7, 14)]));
      break;  
    case '3 уровень':
      setRandomRussianhWord(shuffleArray([...russianWord.slice(14, 21)]));
      break;
    case '4 уровень':
      setRandomRussianhWord(shuffleArray([...russianWord.slice(21, 28)]));
      break;
    case '5 уровень':
      setRandomRussianhWord(shuffleArray([...russianWord.slice(28, 35)]));
      break;
    //no default
  }
}