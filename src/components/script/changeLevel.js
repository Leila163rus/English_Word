export function changeLevel(correctIndex, levels, setLevel) {
  setLevel(levels[0])
  switch(true) {
    case correctIndex?.length>=7 && correctIndex?.length<14: 
      setLevel(levels[1]);
      break;
    case correctIndex?.length>=14 && correctIndex?.length<21:
      setLevel(levels[2]);
      break;
    case correctIndex?.length>=21 && correctIndex?.length<28:
      setLevel(levels[3]);
      break;
    case correctIndex?.length>=28:
      setLevel(levels[4]);
      break;  
      //no default
  }
}