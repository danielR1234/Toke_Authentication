import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string | null
}

const InputKrankenkasse = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Krankenkasse'
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={{
        required: false,
        pattern: {
          value: /^([A-Z]{1})([\d]{8})([\d]{1})$/i,
          message: 'No valid Krankenkasse',
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Krankenkasse'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputKrankenkasse
