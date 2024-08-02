import {Dialog} from '@mui/material'
import {DialogTitle} from '@mui/material'
import {DialogContent} from '@mui/material'
import {DialogContentText} from '@mui/material'
import {DialogActions} from '@mui/material'
import {Button} from '@mui/material'
import './DialogEndLevel.css'
import { useEffect, useState } from 'react'

const DialogEndLevel = ({correctIndex}) => {
  const [showModal,setShowModal] = useState(false)

  useEffect (() => {
  if(correctIndex?.length === 35) {
    setShowModal(true)
    } 
  },[correctIndex])
  console.log(correctIndex)

  return (
    <Dialog
      open={showModal}
      style={{border: '5px solid black'}}
      >
      <DialogTitle 
      style={{textAlign: 'center', fontSize: '40px'}}
      >Поздравляем!
      </DialogTitle>
      <DialogContent>
        <DialogContentText 
        style={{textAlign: 'center', fontSize: '20px'}}
        >Вы прошли все уровни! 
          <p className='emoji'>&#129303;</p>
        Заходите позже. Уровни обновляются.
        </DialogContentText>
      </DialogContent>
        <DialogActions>                    
          <Button variant='black' onClick={() => setShowModal(false)}>
                {"OK"}
          </Button>
        </DialogActions>
    </Dialog>
  )
}

export default DialogEndLevel