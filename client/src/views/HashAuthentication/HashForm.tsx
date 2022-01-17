import React from 'react'
import { Box } from '@mui/material'
import { InputTan, InputToken } from '../../Components'

import SubmitButton from '../../Components/SubmitButton'

interface Props {}

const HashForm: React.FC = (props: Props) => {
  return (
    <>
      <InputToken />
      <Box mt={2} mb={2}>
        <InputTan />
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

export default HashForm
