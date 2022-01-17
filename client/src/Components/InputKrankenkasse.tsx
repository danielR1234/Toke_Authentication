import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string
}

const InputKrankenkasse = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Krankenkasse'
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
          label='Krankenkasse'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputKrankenkasse
