import { css } from 'styled-components';
import MrEavesXLModOTReg from './MrEavesXLModOT-Reg.ttf';
import MrEavesXLModOTBold from './MrEavesXLModOT-Bold.ttf';
import MrEavesXLModOTHeavy from './MrEavesXLModOT-Heavy.ttf';

export const GlobalFonts = css`
  @font-face {
    font-family: MrEavesXLModOTReg;
    src: url(${MrEavesXLModOTReg}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: MrEavesXLModOTBold;
    src: url(${MrEavesXLModOTBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: MrEavesXLModOTHeavy;
    src: url(${MrEavesXLModOTHeavy}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
