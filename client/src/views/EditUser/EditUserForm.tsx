import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {
  InputEmail,
  InputIBAN,
  InputKirchensteuerpflichtig,
  InputKrankenkasse,
  InputSozialversicherungsnummer,
  InputSteueridentifikationsnummer,
  SubmitButton,
} from '../../Components'
import InputSteuerklasse from '../../Components/InputSteurklasse'
import { AppContext } from '../../Context/Context'

interface Props {}

const EditUserForm: React.FC = (props: Props) => {
  const {
    state: {
      user: { user },
    },
  } = useContext(AppContext)
  const {
    IBAN,
    Kirchensteuerpflichtig,
    Krankenkasse,
    Mailadresse,
    Sozialversicherungsnummer,
    Steueridentifikationsnummer,
    Steuerklasse,

    Token,
  } = user
  return (
    <>
      <Typography>your Token : {Token}</Typography>
      <Box mt={2} mb={2}>
        <InputEmail defaultValue={Mailadresse} />
      </Box>
      <Box mt={2} mb={2}>
        <InputKrankenkasse defaultValue={Krankenkasse} />
      </Box>
      <Box mt={2} mb={2}>
        <InputIBAN defaultValue={IBAN} />
      </Box>
      <Box mt={2} mb={2}>
        <InputSozialversicherungsnummer
          defaultValue={Sozialversicherungsnummer}
        />
      </Box>
      <Box mt={2} mb={2}>
        <InputSteuerklasse defaultValue={Steuerklasse} />
      </Box>
      <Box mt={2} mb={2}>
        <InputSteueridentifikationsnummer
          defaultValue={Steueridentifikationsnummer}
        />
      </Box>
      <Box mt={2} mb={2}>
        <InputKirchensteuerpflichtig defaultValue={Kirchensteuerpflichtig} />
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
