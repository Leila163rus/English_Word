import './Card.css'
import { englishWord, russianWord } from '../script/dataWords'
import { v4 as uuidv4 } from 'uuid'
import { List, ListItem, Button } from '@mui/material'
import { useStyles } from './ButtonStyles'
import { shuffleArray } from '../script/shuffleArray'
import { changeRandomEnglishWord } from '../script/changeRandomEnglishWord'
import { useEffect, useState } from 'react'

function EnglishCard({currentWordArray, correctIndex, unCorrectEnIndex, level, onClick}) {
  const [randomEnglishWord, setRandomEnglishWord] = useState([])

  let currentEnWord = correctIndex?.map((el, index, arr) => englishWord[arr[index]])
  
  let unCurrentEnWord = unCorrectEnIndex?.map((el, index, arr) => englishWord[arr[index]])

  const handleWord = (e) => {
    if(currentWordArray?.length===0 || russianWord.some(el => currentWordArray?.slice(-1).flat().includes(el))) {
      onClick(e.target.value)
    }
  }

  console.log(unCurrentEnWord)

  useEffect(() => {
    changeRandomEnglishWord(level, englishWord, setRandomEnglishWord, shuffleArray)
  },[level])

  return (
    <List>
      <ListItem className='list'>
        {randomEnglishWord.map(el => {return(
        <Button sx={unCurrentEnWord?.includes(el) && 
                   !currentEnWord?.includes(el)?
                    useStyles.buttonRed : useStyles.button}
        variant='outlined' 
        key={uuidv4()}
        value={el}
        onClick={handleWord}
        disabled={currentEnWord?.includes(el)}
        >{el}
        </Button>)})} 
      </ListItem>
    </List>
  );
}

export default EnglishCard;