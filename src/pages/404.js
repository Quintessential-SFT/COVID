import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";
import icon from "../images/COVID-icon.svg"
import image404 from "../images/COVID-404.svg"
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {headerHeight} from "../components/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100vh - ${headerHeight}px)`,
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
}));

const NotFoundPage = () => {

  const classes = useStyles();

  return (
      <>
        <SEO title="404: Δεν βρέθηκε"/>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-evenly"} className={classes.root}>
          <img src={icon} alt={'covid-icon'} className={classes.icon}/>
          <Typography variant='h4'>Η σελίδα δεν βρέθηκε. Μήπως έμεινε και αυτή σπίτι; Μπράβο της. Κάνε το ίδιο.</Typography>
          <img src={image404} alt={'covid-404'} className={classes.image}/>
          <MuiLink to="/" underline={'none'}>
            <Button color={"secondary"} variant={"contained"} className={classes.button}>
              Επιστροφή στο site
            </Button>
          </MuiLink>
        </Box>
      </>
  )
};

export default NotFoundPage
