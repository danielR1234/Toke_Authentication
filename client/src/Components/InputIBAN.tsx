import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string
}

const InputIBAN = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='IBAN'
      control={control}
      defaultValue={defaultValue ? defaultValue : ''}
      rules={{
        required: 'Can not be emtpy',
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='IBAN'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputIBAN
