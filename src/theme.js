/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)'
    },
    neutral: {
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)'
    }
  },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`
  }
})
