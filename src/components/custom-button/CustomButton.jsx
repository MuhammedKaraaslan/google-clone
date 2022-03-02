import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles'

function CustomButton({children}) {
  return (
    <CustomButtonContainer>
        {children}
    </CustomButtonContainer>
  )
}

export default CustomButton