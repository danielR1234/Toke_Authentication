import { TextField } from '@mui/material'
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

interface Props {}

const InputEmail: React.FC = (props: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Mailadresse'
      control={control}
      defaultValue=''
      rules={{
        required: 'Can not be emtpy',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'No valid Email',
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Mailadresse'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputEmail
