import styled from 'styled-components';

import { Dropdown } from 'react-bootstrap';

export const StyledDropDown = styled(Dropdown)`
         button {
           &.btn-primary {
             margin: 0.6rem;
             background: none;
             border: none;
             &:active {
               background: none;
             }
           }

           .btn-primary:active:focus {
             color: #ffffff;
             background-color: #161617;
             border-color: #494f57;
           }

           &.btn-primary:not(:disabled):not(.disabled):active,
           &.btn-primary:not(:disabled):not(.disabled).active,
           &.show > .btn-primary.dropdown-toggle {
             background-color: none;
             border-color: none;
           }

           &:after {
             border-top: none !important;
           }
         }
       `;
