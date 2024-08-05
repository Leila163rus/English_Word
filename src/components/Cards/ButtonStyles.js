export const useStyles = {
  button: {
    marginBottom: 2,
    marginTop: 1,
    backgroundColor: 'white',
    color: 'black',
    border: '3px solid black',
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive, sans-serif',
    fontSize: 17,
    fontWeight: 600,
    width: 250,
    height: 70,
    '&:active': {transform: 'scale(0.97)',  
                 boxShadow: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)'},
    '&:hover': {backgroundColor: 'white',
                border: '3px solid rgb(5, 39, 5);'}
  },
  buttonRed: {
    marginBottom: 2,
    marginTop: 1,
    backgroundColor: 'white',
    color: 'black',
    border: '3px solid red',
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive, sans-serif',
    fontSize: 17,
    fontWeight: 600,
    width: 250,
    height: 70,
    animation: 'width-increase 0.2s ease',
    '&:active': {'@keyframes width-increase': {
      '0%': { transform: 'rotate(0deg)'},
      '25%': { transform: 'rotate(5deg)'},
      '50%': { transform: 'rotate(0eg)'},
      '75%': { transform: 'rotate(-5deg)'},
      '100%': { transform: 'rotate(0deg)'}
      }
    },
    '&:hover': {backgroundColor: 'white',
                border: '3px solid rgb(5, 39, 5);'}
  }
}