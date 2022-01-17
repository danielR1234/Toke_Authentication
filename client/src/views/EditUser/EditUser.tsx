import EditUserForm from './EditUserForm'
import axios from '../../utils/axios'
import { Box, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/Context'
import { Types } from '../../Context/Types'
import { Response } from '../../types/interfaces'
import { SectionDefault } from '../../Components'

export type FormValues = {
  Mailadresse: string
  IBAN: string
  Krankenkasse: string
  Sozialversicherungsnummer: string
  Steueridentifikationsnummer: string
  Kirchensteuerpflichtig: string
  Steuerklasse: string
}

const EditUser: React.FC = () => {
  const form = useForm<FormValues>()
  const navigate = useNavigate()

  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const {
    state: {
      user: { user },
    },
    dispatch,
  } = useContext(AppContext)
  const submit: SubmitHandler<FormValues> = async ({
    Mailadresse,
    IBAN,
    Kirchensteuerpflichtig,
    Krankenkasse,
    Sozialversicherungsnummer,
    Steueridentifikationsnummer,
    Steuerklasse,
  }) => {
    const data = await axios
      .put<any, Response>('', {
        Mailadresse,
        IBAN,
        Kirchensteuerpflichtig,
        Krankenkasse,
        Sozialversicherungsnummer,
        Steueridentifikationsnummer,
        Steuerklasse,
        Token: user.Token,
      })
      .catch(() => {
        setError('Invalid Token or Tan')
      })

    if (data?.data?.user) {
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: data.data.user,
        },
      })
    }
    setSuccess('You have updated your Data :D')
  }
  return (
    <SectionDefault>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <FormProvider {...form}>
          <form style={{ width: '100%' }} onSubmit={form.handleSubmit(submit)}>
            <EditUserForm />
          </form>
          <Box mt={2}>
            {error && <Typography color='error'>{error} </Typography>}
            {success && <Typography color='success'>{error} </Typography>}
          </Box>
        </FormProvider>
      </Box>
    </SectionDefault>
  )
}

export default EditUser
