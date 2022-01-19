import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string | null
}

const InputSteuerklasse = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Steuerklasse'
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={{
        required: false,
        minLength: {
          value: 1,
          message: 'no valid Steuerklasse',
        },
        maxLength: {
          value: 6,
          message: 'no valid Steuerklasse',
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Steuerklasse'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputSteuerklasse
