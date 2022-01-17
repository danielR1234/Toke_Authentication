import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string
}

const InputToken = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Token'
      control={control}
      defaultValue={defaultValue ? defaultValue : ''}
      rules={{
        required: 'Can not be emtpy',
        minLength: {
          value: 3,
          message: 'at least 3 symbols',
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
