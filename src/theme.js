import {createMuiTheme} from '@material-ui/core/styles';
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const white = '#fff';
const black = '#000';
const primary = '#2196f3';
const secondary = '#f50057';

const error = '#F00';

const theme = createMuiTheme({
  palette: {
    white,
    black,
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
    error: {
      main: error,
    },
    background: {
      default: white,
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
