import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {}

const InputToken: React.FC = (props: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Token'
      control={control}
      defaultValue=''
      rules={{
        required: 'Can not be emtpy',
        minLength: {
          value: 10,
          message: 'at least 10 symbols',
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Token'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputToken
