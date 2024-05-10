import { Stack } from '@mui/material'
import styles from './HangmanWord.module.css'

interface HangmanWordProps {
  guessedLetters: Array<{ letter: string; visible: boolean }>
  modal: boolean
}

function HangmanWord({ guessedLetters, modal }: HangmanWordProps) {
  console.log(guessedLetters)
  return (
    <Stack direction={'row'} className={styles.container}>
      {guessedLetters.map((el, i) => {
        if (el.visible === false) {
          return (
            <p className={`${styles.letter} ${modal ? styles.fail : styles.hide}`} key={`letter${i}`}>
              {el.letter}
            </p>
          )
        } else {
          return (
            <p className={styles.letter} key={`letter${i}`}>
              {el.letter}
            </p>
          )
        }
      })}
    </Stack>
  )
}

export default HangmanWord
