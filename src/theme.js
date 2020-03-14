import {createMuiTheme} from '@material-ui/core/styles';
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const primary = '#FFC600';
const secondary = '#000';
const purple = '#6C63FF';


const theme = createMuiTheme({
  palette: {
    purple,
    primary: {
      main: primary,
      contrastText: '#000',
    },
    secondary: {
      main: secondary,
      contrastText: '#FFF',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
    }
  }
});

export default responsiveFontSizes(theme);
