import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface Props {
  defaultValue?: string
}

const InputKirchensteuerpflichtig = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='Kirchensteuerpflichtig'
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
          label='Kirchensteuerpflichtig'
          color='secondary'
          {...field}
        />
      )}
    />
  )
}

export default InputKirchensteuerpflichtig
