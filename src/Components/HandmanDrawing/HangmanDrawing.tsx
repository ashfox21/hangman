import { Box } from '@mui/material'
import styles from './HangmanDrawing.module.css'

interface HangmanDrawingProps {
  mistakesCounter: number
}

function HangmanDrawing({ mistakesCounter }: HangmanDrawingProps) {
  return (
    <Box className={styles.container}>
      <img
        src={`src\\assets\\hangman\\frame${mistakesCounter}.png`}
        className={styles.image}
        alt=""
      />
    </Box>
  )
}

export default HangmanDrawing
