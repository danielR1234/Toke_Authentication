import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SectionDefault from '../../Components/SectionDefault'
import { AppContext } from '../../Context/Context'
import { Types } from '../../Context/Types'
import { Response } from '../../types/interfaces'

import axios from '../../utils/axios'
import TokenForm from './TokenForm'

type FormValues = {
  Token: string
}

const TokenAuthentication: React.FC = () => {
  const form = useForm<FormValues>()
  const navigate = useNavigate()
  const { dispatch } = useContext(AppContext)

  const submit: SubmitHandler<FormValues> = async ({ Token }) => {
    const { data } = await axios.post<any, Response>('token', {
      Token,
    })
    if (data) {
      if (data.message === 'Please provide your Email') {
        dispatch({
          type: Types.SET_TOKEN,
          payload: { Token: Token },
        })
        return navigate('/email')
      }
      if (data.user) {
        dispatch({
          type: Types.SET_USER,
          payload: {
            user: data.user,
          },
        })
        navigate('/tokenandtan')
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
            <TokenForm />
          </form>
        </FormProvider>
      </Box>
    </SectionDefault>
  )
}

export default TokenAuthentication
