import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  borderRadius: '0.625rem',
  boxShadow: {
    normal: '1px 1px 10px rgba(0, 0, 0, 0.15)',
    hover: '1px 1px 10px rgba(0, 0, 0, 0.6)',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      grey: '#DADADA',
      lightGrey: '#FDFDFD',
      darkGrey: '#999999',
      crimson: '#B90445',
    },
    overlay: 'rgba(0, 0, 0, 0.25)',
  },
  typography: {
    font: {
      primary: "'Merriweather'",
      secondary: "'Roboto'",
      code: "'Roboto Mono'",
    },
  },
}

export default theme
