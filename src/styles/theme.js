import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepOrange[500],
    },
    secondary: {
      main: colors.red[50],
    },
  },
  typography: {
    secondaryFontFamily: ['Nerko One', 'cursive'].join(','),
  },
});
