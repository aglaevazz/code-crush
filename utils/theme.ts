import { createTheme } from '@nextui-org/react'

export const customTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
    colors: {
        background: '#F6F4E6',
        primary: '#E7A74E',
        primaryLight: '#F4C76C',
        primaryLightHover: '#F9D78C',
        primaryLightActive: '#E2A34E',
        primaryLightContrast: '#222',
        primaryBorder: '#D09032',
        primaryBorderHover: '#C28430',
        primarySolidHover: '#B9772E',
        primarySolidContrast: '#fff',
        primaryShadow: '#D09032',
        gradient: 'linear-gradient(112deg, #F6EFD4 -25%, #F9D9A7 -10%, #F5E0C7 80%)',
        link: '#996515',
        myColor: '#ff9933'
        },
      space: {},
      fonts: {
        body: '"Open Sans", sans-serif',
        heading: '"Montserrat", sans-serif',
      },
      fontSizes: {
        small: '14px',
        body: '16px',
        heading: '36px',
      },
      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      radii: {
        default: '4px',
        sm: '2px',
        lg: '8px',
      },
    }
  })