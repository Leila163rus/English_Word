
import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Zoom } from 'react-awesome-reveal'
import EnglishCard from './components/Cards/EnglishCard'
import RussianCard from './components/Cards/RussiaCard'
import { russianWord } from './components/script/dataWords'
import { englishWord } from './components/script/dataWords'
import { sliceArray } from './components/script/sliceArray'
import { compareIndex } from './components/script/compareIndex'
import { changeLevel } from './components/script/changeLevel'
import { levels } from './components/script/dataLevels'
import DialogEndLevel from './components/Dialog/DialogEndLevel'

function App() {
  const[word, setWord] = useState([])
  const[correctIndex, setCorrectIndex] = useState()
  const[unCorrectEnIndex, setUnCorrectEnIndex] = useState()
  const[unCorrectRusIndex, setUnCorrectRusIndex] = useState()
  const[level, setLevel] = useState(levels)

  const handleWord = (newWord) => {
    setWord([...word, newWord])
  }

  let currentWordArray = useMemo(() => sliceArray(word),[word])
  
  useEffect(() => {
    compareIndex(currentWordArray, englishWord, russianWord, setCorrectIndex, setUnCorrectEnIndex, setUnCorrectRusIndex)
  },[currentWordArray])

  useEffect(() => {
    changeLevel(correctIndex, levels, setLevel)
  },[correctIndex])

  return (
    <div className='App'>
      <Zoom>
      <header className='header'>Сопоставьте слова</header>
      <div className='level'>
      <h3>{level}</h3>
      </div>
      <main className='main'>
        <section className='row'>
          <EnglishCard 
          currentWordArray={currentWordArray}
          correctIndex={correctIndex} 
          unCorrectEnIndex={unCorrectEnIndex} 
          level={level}
          onClick={handleWord}/>
        </section>
        <section className='row'>
          <RussianCard 
          currentWordArray={currentWordArray}
          correctIndex={correctIndex} 
          unCorrectRusIndex={unCorrectRusIndex} 
          level={level}
          onClick={handleWord}/>
        </section>
        <aside>
          <DialogEndLevel correctIndex={correctIndex}/> 
        </aside>
        </main>
        </Zoom>
    </div>
  );
}

export default App;
