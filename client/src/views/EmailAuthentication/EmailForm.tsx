import { Box } from '@mui/material'
import React from 'react'
import InputEmail from '../../Components/InputEmail'
import InputToken from '../../Components/InputToken'
import SubmitButton from '../../Components/SubmitButton'

interface Props {}

const EmailForm: React.FC = (props: Props) => {
  return (
    <>
      <InputToken />
      <Box mt={2} mb={2}>
        <InputEmail />
      </Box>
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

export default EmailForm
