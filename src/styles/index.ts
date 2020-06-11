import { createGlobalStyle } from 'styled-components';
import { GlobalFonts } from '~styles/fonts/index';

export const GlobalStyles = createGlobalStyle`
  ${GlobalFonts}

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.palette.bodyBgColor};
    font-size: ${({ theme }) => theme.metrics.fontSize};
    font-family: MrEavesXLModOTReg;
    letter-spacing: 0.06rem;

    textarea:focus,
    textarea.form-control:focus,
    input.form-control:focus,
    input[type=text]:focus,
    input[type=password]:focus,
    input[type=email]:focus,
    input[type=number]:focus,
    [type=text].form-control:focus,
    [type=password].form-control:focus,
    [type=email].form-control:focus,
    [type=tel].form-control:focus,
    [contenteditable].form-control:focus,
    button {
      box-shadow: inset 0 0 0 #ddd;
    }

    #page-container {
      width: 100%;
      margin: 0;
      max-width: none;
      padding-right: 0;
      padding-left: min(350px, ${({ theme }) => theme.metrics.sideNavWidth});
      padding-top: ${({ theme: { metrics } }) => `calc(${metrics.headerOverlayHeight} + ${metrics.headerHeight})`};

      .row {
        margin-right: 0;
        margin-left: 0;
      }
    }

    a {
      &:hover {
        color: ${({ theme }) => theme.palette.secondaryBlue};
        text-decoration: none;
      }
      &.disabled {
        cursor: none;
        pointer-events: none;
        color: ${({ theme }) => theme.palette.lighterGrey} !important;
      }
    }

    .btn:disabled {
      &:hover {
        background-color: #007bff;
      }
    }

    button {
      font-weight: bold;
      text-transform: uppercase;
      box-shadow: none !important;
    }

    .form-group {
      margin-bottom: 0.5rem;

      .form-control {
        border-radius: 0;

        &:focus {
          border-color: ${({ theme }) => theme.palette.secondaryBlue};
        }
      }
    }
  }
`;
