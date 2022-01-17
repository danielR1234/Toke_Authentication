import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string | null
}

const InputSozialversicherungsnummer = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Sozialversicherungsnummer'
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Sozialversicherungsnummer'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputSozialversicherungsnummer
