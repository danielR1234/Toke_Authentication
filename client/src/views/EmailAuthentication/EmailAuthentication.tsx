import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { SectionDefault } from '../../Components'
import { Response } from '../../types/interfaces'
import axios from '../../utils/axios'
import EmailForm from './EmailForm'

export type FormValues = {
  Token: string
  Mailadresse: string
}

const EmailAuthentication: React.FC = () => {
  const form = useForm<FormValues>()
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')

  const submit: SubmitHandler<FormValues> = async ({ Token, Mailadresse }) => {
    const { data } = await axios.post<any, Response>('email', {
      Token,
      Mailadresse,
    })

    if (data) {
      if (data.error) {
        return setError(data.error)
      }
      if (data.user) {
        navigate('/hash')
      }
    }
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
            <EmailForm />
          </form>
          <Box mt={2}>
            {error && <Typography color='error'>{error} </Typography>}
          </Box>
        </FormProvider>
      </Box>
    </SectionDefault>
  )
}

export default EmailAuthentication
