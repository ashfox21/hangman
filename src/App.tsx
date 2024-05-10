import { Box } from '@mui/material'
import words from '../wordList.json'
import styles from './appStyles.module.css'
import HangmanDrawing from './Components/HandmanDrawing/HangmanDrawing'
import HangmanWord from './Components/HangmanWord/HangmanWord'
import Keyboard from './Components/Keyboard/Keyboard'
import { useEffect, useState } from 'react'
import EndgameModal from './Components/EndgameModal/EndgameModal'

function App() {
  const [guessedLetters, setGuessedLetters] = useState(getLetters(words))
  const [mistakesCounter, setMistakesCounter] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const [isLose, setIsLose] = useState(false)

  function increaseMistakesCounter() {
    if (mistakesCounter === 9) {
      setIsLose(true)
    }
    setMistakesCounter(mistakesCounter + 1)
  }

  function getLetters(wordArray: string[]) {
    const randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    console.log(randomWord)
    const lettersMap = randomWord.split('').map((el) => {
      return { letter: el, visible: false }
    })

    return lettersMap
  }

  function changeLetterVisibility(letter: string) {
    console.log({ letter })
    let letterInAWord = false
    setGuessedLetters(
      guessedLetters.map((el) => {
        if (el.letter === letter.toLowerCase()) {
          letterInAWord = true
          return { ...el, visible: true }
        }
        return el
      }),
    )

    return letterInAWord
  }

  useEffect(() => {
    let allLettersFound = true

    guessedLetters.forEach((el) => {
      if (el.visible === false) {
        allLettersFound = false
      }
    })

    if (allLettersFound === true) {
      setIsWin(true)
    }
  }, [guessedLetters])

  return (
    <Box className={styles.paper}>
      <img
        src="src\assets\main-title.png"
        alt=""
        className={styles.mainTitle}
      />
      <Box className={styles.container}>
        <HangmanDrawing mistakesCounter={mistakesCounter} />
        <Box className={styles.textContainer}>
          <HangmanWord guessedLetters={guessedLetters} modal={false} />
          <Keyboard
            changeLetterVisibility={changeLetterVisibility}
            increaseMistakesCounter={increaseMistakesCounter}
            isLose={isLose}
            isWin={isWin}
          />
        </Box>
      </Box>
      <EndgameModal
        isWin={isWin}
        isLose={isLose}
        guessedLetters={guessedLetters}
      />
    </Box>
  )
}

export default App
