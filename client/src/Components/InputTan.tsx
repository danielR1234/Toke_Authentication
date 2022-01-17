import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {}

const InputTan: React.FC = (props: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Tan'
      control={control}
      defaultValue=''
      rules={{
        required: 'Can not be emtpy',
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={Boolean(error)}
          helperText={error && error.message}
          fullWidth
          label='Tan'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputTan
