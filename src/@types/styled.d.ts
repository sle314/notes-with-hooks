import 'styled-components'

interface WithHover {
  normal: string
  hover: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    boxShadow: WithHover
    palette: {
      common: {
        black: string
        white: string
        lightGrey: string
        grey: string
        darkGrey: string
        crimson: string
      }
      overlay: string
   }
   typography: {
     font: {
       primary: string
       secondary: string
       code: string
     }
   }
  }
}
