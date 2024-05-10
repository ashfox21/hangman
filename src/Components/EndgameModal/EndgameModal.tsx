import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useState } from 'react'
import styles from './EndgameModale.module.css'
import HangmanWord from '../HangmanWord/HangmanWord'

interface MyComponentProps {
  isWin: boolean
  isLose: boolean
  guessedLetters: Array<{ letter: string; visible: boolean }>
}

function EndgameModal({ isWin, isLose, guessedLetters }: MyComponentProps) {
  const matches = useMediaQuery('(max-width:650px)')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isLose || isWin) {
      setTimeout(() => {
        setOpen(true)
      }, 1500)
    }
  }, [isLose, isWin])

  const winContent = (
    <Box className={styles.result_container}>
      <Box className={styles.text_wrapper}>
        <img
          src="src\assets\win-title.png"
          className={styles.result_title}
          alt=""
        />
        <HangmanWord guessedLetters={guessedLetters} modal={true} />
      </Box>
      <img
        src="src\assets\hangman-character.png"
        style={{ width: '40%' }}
        alt=""
      />
    </Box>
  )

  const loseContent = (
    <Box className={styles.result_container}>
      <Box className={styles.text_wrapper}>
        <img
          src="src\assets\game-over-title.png"
          className={styles.result_title}
          alt=""
        />
        <HangmanWord guessedLetters={guessedLetters} modal={true} />
      </Box>
      <img
        src="src\assets\game-over.gif"
        className={styles.gif_animation}
        alt=""
      />
    </Box>
  )

  return (
    <>
      <Dialog
        maxWidth="md"
        className={styles.modal}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matches}
      >
        <DialogContent>
          <img
            src="src\assets\main-title-short.png"
            className={styles.main_titie}
            alt=""
          />
          {isWin ? winContent : loseContent}
        </DialogContent>
        <DialogActions>
          <Button
            sx={
              isWin
                ? { backgroundColor: '#e91e63' }
                : { backgroundColor: '#273582' }
            }
            variant="contained"
            onClick={() => {
              window.location.reload()
            }}
          >
            Start new game
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EndgameModal
