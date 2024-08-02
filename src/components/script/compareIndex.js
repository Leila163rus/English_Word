export function compareIndex(currentWordArray, englishWord, russianWord, 
  setCorrectIndex, setUnCorrectEnIndex, setUnCorrectRusIndex) {
  let indexEn = currentWordArray.map(a => a.map(el => englishWord.includes(el) && englishWord.indexOf(el))
                                           .filter(el => el !==false)).flat()
  let indexRus = currentWordArray.map(a => a.map(el => russianWord.includes(el) && russianWord.indexOf(el))
                                            .filter(el => el !==false)).flat()
  if(indexEn.length>0 && indexEn.length === indexRus.length) {
    setCorrectIndex(indexEn.filter((el, index) => el === indexRus[index]))
    setUnCorrectEnIndex(indexEn.filter((el, index) => el !== indexRus[index]))
    setUnCorrectRusIndex(indexRus.filter((el, index) => el !== indexEn[index]))
  }
}
