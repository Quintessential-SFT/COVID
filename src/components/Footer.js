import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FooterImage from "../images/COVID-footer-image.svg"
import ButtonBase from "@material-ui/core/ButtonBase";
import ForkButton from "../images/fork-button.svg"
import MuiLink from "./utility/MuiLink";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(28),
    backgroundColor: theme.palette.common.white,
    position: 'relative'
  },
  image: {
    maxWidth: '100%'
  },
  quint: {
    marginBottom: theme.spacing(4)
  }
}));

export default function Footer(props) {
  const {...rest} = props;

  const classes = useStyles();

  return (
      <footer {...rest}>
        <Box p={3} display='flex' justifyContent="center" alignItems="center" flexDirection={'column'} className={classes.root}>
          <MuiLink href='https://quintessential.gr' variant="body1" color='inherit'
                className={classes.quint}>
            <img src={FooterImage} alt={'COVID-footer'} className={classes.image}/>
          </MuiLink>
          <MuiLink href='https://github.com/Quintessential-SFT/COVID' variant="body1" color='inherit'
                className={classes.fork}>
            <ButtonBase>
              <img src={ForkButton} alt={'fork-button'}/>
            </ButtonBase>
          </MuiLink>
        </Box>
      </footer>
  );
}

