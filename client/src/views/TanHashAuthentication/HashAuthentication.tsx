import { Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SectionDefault from '../../Components/SectionDefault'
import { AppContext } from '../../Context/Context'
import { Types } from '../../Context/Types'
import { Response } from '../../types/interfaces'
import axios from '../../utils/axios'
import HashForm from './HashForm'

export type FormValues = {
  Token: string
  Tan: string
}

const HashAuthentication: React.FC = () => {
  const form = useForm<FormValues>()
  const navigate = useNavigate()
  const { dispatch } = useContext(AppContext)
  const [error, setError] = useState<string>('')

  const submit: SubmitHandler<FormValues> = async ({ Token, Tan }) => {
    const data = await axios
      .post<any, Response>('hash', {
        Token,
        Tan,
      })
      .catch(() => {
        setError('Invalid Token or Tan')
      })
    console.log('data', data)

    if (data?.data?.user) {
      localStorage.setItem('Token', Token)
      dispatch({
        type: Types.SET_USER,
        payload: {
          user: data.data.user,
        },
      })
      navigate('/profile')
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
            <HashForm />
          </form>
          <Box mt={2}>
            {error && <Typography color='error'>{error} </Typography>}
          </Box>
        </FormProvider>
      </Box>
    </SectionDefault>
  )
}

export default HashAuthentication
