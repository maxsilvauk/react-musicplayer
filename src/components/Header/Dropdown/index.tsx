import React, { FC } from 'react'
import { Dropdown } from 'react-bootstrap'
import { StyledDropDown } from './styles'

interface Props {
  icon?: React.ReactNode
}

const CustomDropDown: FC<Props> = ({ icon, children }) => {
  return (
    <StyledDropDown>
      <Dropdown.Toggle id="dropdown-custom-components">{icon}</Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </StyledDropDown>
  )
}

export default CustomDropDown
