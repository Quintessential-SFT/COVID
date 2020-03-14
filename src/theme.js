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
    background: {
      default: '#FFF'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 300,
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif',
    },
    button : {
      fontFamily: 'Open Sans, sans-serif',
    }
  }
});

export default responsiveFontSizes(theme);
