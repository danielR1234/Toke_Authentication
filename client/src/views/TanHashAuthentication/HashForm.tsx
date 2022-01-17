import { Box } from '@mui/material'
import React from 'react'
import InputTan from '../../Components/InputTan'
import InputToken from '../../Components/InputToken'

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
