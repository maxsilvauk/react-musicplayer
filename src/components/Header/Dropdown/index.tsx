import React from 'react';

import { Dropdown } from 'react-bootstrap';

import { StyledDropDown } from './styles';

// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={e => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {/* Render custom icon here */}
//     &#x25bc;
//     {children}
//   </a>
// ));

interface Props {
  icon?: React.ReactNode;
}

const CustomDropDown: React.FC<Props> = ({ icon, children }) => {

  return (
    <StyledDropDown>
      <Dropdown.Toggle id="dropdown-custom-components">
        {icon}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </StyledDropDown>
  );
};

export default CustomDropDown;
