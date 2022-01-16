import { Box } from '@mui/material'
import React from 'react'
import InputToken from '../../Components/InputToken'
import SubmitButton from '../../Components/SubmitButton'

interface Props {}

const TokenForm: React.FC = (props: Props) => {
  return (
    <>
      <InputToken />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='100%'
        mt={5}
      >
        <SubmitButton />
      </Box>
    </>
  )
}

export default TokenForm
