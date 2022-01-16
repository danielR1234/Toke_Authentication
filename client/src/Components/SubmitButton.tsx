import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

const SubmitButton: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(true)
  const {
    formState: { isSubmitted, isValid },
  } = useFormContext()

  useEffect(() => {
    if (isSubmitted) {
      setIsFormValid(isValid)
    }
  }, [isSubmitted, isValid])

  return (
    <Box mt={5}>
      <Button
        disabled={!isFormValid}
        size='large'
        variant='contained'
        type='submit'
        color='secondary'
      >
        Submit
      </Button>
      {!isFormValid && (
        <Box mt={2}>
          <Typography color='error'> Please check your inputs </Typography>
        </Box>
      )}
    </Box>
  )
}

export default SubmitButton
