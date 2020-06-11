const theme = {
  metrics: {
    fontSize: '1rem',
    headerHeight: '3.8rem',
    headerOverlayHeight: '2.7rem',
    headerTotalHeight: '6.5rem',
    sideNavWidth: '20vw',
  },
  palette: {
    primaryRed: '#ff00cc',
    secondaryBlue: '#1592fe',
    textColor: '#767676',
    navGreyColor: '#838383',
    darkGrey: '#d7d7d7',
    lightGrey: '#e1e1e1',
    lighterGrey: '#83838347',
    textGrey: '#999999',
    bodyBgColor: 'white',
    topBarBgColor: 'white',
    formBgColor: '#f6f6f6',
    inputBorderColor: '#acacac',
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  // tslint:disable-next-line: no-empty-interface
  export interface DefaultTheme extends Theme { }
}

export default theme;
