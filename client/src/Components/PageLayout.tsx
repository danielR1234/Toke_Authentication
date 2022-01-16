import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

const useStyles = makeStyles({
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    width: '100%',
    paddingTop: '180px',
  },
})

const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Box component='main' className={classes.main}>
      {children}
    </Box>
  )
}

export default PageLayout
