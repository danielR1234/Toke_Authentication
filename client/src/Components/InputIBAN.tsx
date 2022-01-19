import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
interface Props {
  defaultValue?: string | null
}

const InputIBAN = ({ defaultValue }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name='IBAN'
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={{
        required: false,
        pattern: {
          value:
            /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/i,
          message: 'No valid IBAN',
        },
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
