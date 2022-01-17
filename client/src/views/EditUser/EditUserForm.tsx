import React, { useContext } from 'react'
import {
  SubmitButton,
  InputToken,
  InputTan,
  InputEmail,
  InputKrankenkasse,
  InputSozialversicherungsnummer,
  InputSteueridentifikationsnummer,
  InputKirchensteuerpflichtig,
} from '../../Components'
import { AppContext } from '../../Context/Context'
import { Box, Typography } from '@mui/material'
import InputSteuerklasse from '../../Components/InputSteurklasse'

interface Props {}

const EditUserForm: React.FC = (props: Props) => {
  const {
    state: {
      user: { user },
    },
    dispatch,
  } = useContext(AppContext)
  const {
    Hash,
    IBAN,
    Kirchensteuerpflichtig,
    Krankenkasse,
    Mailadresse,
    Sozialversicherungsnummer,
    Steueridentifikationsnummer,
    Steuerklasse,
    Tan,
    Token,
  } = user
  return (
    <>
      <Typography>your Token : {Token}</Typography>
      <Box mt={2} mb={2}>
        <InputEmail />
      </Box>
      <Box mt={2} mb={2}>
        <InputKrankenkasse />
      </Box>
      <Box mt={2} mb={2}>
        <InputSozialversicherungsnummer />
      </Box>
      <Box mt={2} mb={2}>
        <InputSteuerklasse />
      </Box>
      <Box mt={2} mb={2}>
        <InputSteueridentifikationsnummer />
      </Box>
      <Box mt={2} mb={2}>
        <InputKirchensteuerpflichtig />
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

export default EditUserForm
