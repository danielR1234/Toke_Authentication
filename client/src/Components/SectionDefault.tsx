import { Box, Container } from '@mui/material'
import React from 'react'

const SectionDefault: React.FC = ({ children }) => {
  return (
    <Box component='section'>
      <Container maxWidth='sm'>
        <Box component='article' my={4}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default SectionDefault
