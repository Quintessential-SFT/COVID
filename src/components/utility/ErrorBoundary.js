import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MuiLink from "./MuiLink";
import SEO from "./SEO";
import icon from "../../images/COVID-icon.svg";
import imageSomethingWrong from "../../images/COVID-something-wrong.svg";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  root: {
    height: `100vh`,
    backgroundColor: theme.palette.grey[100],
    textAlign: 'center',
  },
  icon: {
    maxWidth: '100%',
    height: 100,
    width: 100
  },
  image: {
    maxWidth: '100%'
  },
  button: {
    textTransform: 'none'
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    const { classes } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI

      return (
          <>
            <SEO title="404: Not found"/>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-evenly"} className={classes.root}>
              <img src={icon} alt={'covid-icon'} className={classes.icon}/>
              <Typography variant='h4'>Η σελίδα δεν βρέθηκε. Μήπως έμεινε και αυτή σπίτι; Μπράβο της. Κάνε το ίδιο.</Typography>
              <img src={imageSomethingWrong} alt={'covid-something-wrong'} className={classes.image}/>
              <MuiLink to="/" underline={'none'}>
                <Button color={"secondary"} variant={"contained"} className={classes.button}>
                  Επιστροφή στο site
                </Button>
              </MuiLink>
            </Box>
          </>
      )
    }

    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary);
