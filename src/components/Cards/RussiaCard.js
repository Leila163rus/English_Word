import './Card.css'
import React, { useEffect, useState } from 'react'
import { englishWord, russianWord } from '../script/dataWords'
import { v4 as uuidv4 } from 'uuid'
import { List, ListItem, Button } from '@mui/material'
import { useStyles } from './ButtonStyles'
import { shuffleArray } from '../script/shuffleArray'
import { changeRandomRussianhWord } from '../script/changeRandomRussianhWord'

function RussianCard({currentWordArray, correctIndex, unCorrectRusIndex, level, onClick}) {
  const[randomRussianhWord, setRandomRussianhWord] = useState([])

  let currentRusWord = correctIndex?.map((el, index, arr) => russianWord[arr[index]])

  let unCurrentRusWord = unCorrectRusIndex?.map((el, index, arr) => russianWord[arr[index]])

  const handleWord = (e) => {
    if(currentWordArray?.length===0 || englishWord.some(el => currentWordArray?.slice(-1).flat().includes(el))) {
      onClick(e.target.value)
    }
  }

  useEffect(() => {
    changeRandomRussianhWord(level, russianWord, setRandomRussianhWord, shuffleArray)
  },[level])

  return (
    <List>
      <ListItem className='list'>
        {randomRussianhWord.map(el => {return(
        <Button sx={unCurrentRusWord?.includes(el) && 
                    !currentRusWord.includes(el)? 
                    useStyles.buttonRed : useStyles.button} 
          variant='outlined' 
          key={uuidv4()}
          value={el}
          onClick={handleWord}
          disabled={currentRusWord?.includes(el)}
          >{el}
        </Button>)})} 
      </ListItem>
    </List>
  )
}

export default RussianCard;