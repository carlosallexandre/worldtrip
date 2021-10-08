import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    'text-dark': '#47585B',
    'info-dark': '#999999',
    'text-light': '#F5F8FA',
    'info-light': '#DADADA',
    background: '#F5F8FA',
    hightlight: '#FFBA08',
    // gray: {
    //   900: '#47585B',
    //   500: '#999999',
    //   300: '#DADADA',
    //   100: '#F5F8FA',
    // }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif'
  },
  
})