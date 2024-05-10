import { useState } from 'react'
import styles from './Keyboard.module.css'

const KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

interface MyComponentProps {
  changeLetterVisibility: (letter: string) => boolean
  increaseMistakesCounter: () => void
  isWin: boolean
  isLose: boolean
}

function Keyboard({
  changeLetterVisibility,
  increaseMistakesCounter,
  isWin,
  isLose
}: MyComponentProps) {
  const [blockedKeysList, setBlockedKeysList] = useState<string[]>([])
  const [guessedLetters, setguessedLetters] = useState<string[]>([])  
  function handleCheckLetter(letter: string) {
    if (changeLetterVisibility(letter) === false) {
      setBlockedKeysList((prevState) => [...prevState, letter])
      increaseMistakesCounter()
    } else {
      setguessedLetters((prevState) => [...prevState, letter])
    }
  }
  return (
    <div className={styles.container}>
      {KEYS.map((key, i) => {
        return (
          <button
            className={`${
              blockedKeysList.includes(key) || isWin || isLose ? styles.inactive : ''
            } ${styles.btn} ${
              guessedLetters.includes(key) ? styles.active : ''
            }`}
            onClick={() => handleCheckLetter(key)}
            disabled={blockedKeysList.includes(key) || guessedLetters.includes(key) || isWin || isLose}
            key={`keyboardBtn${i}`}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
