import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import FooterImage from "../images/COVID-footer-image.svg"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(16),
    backgroundColor: theme.palette.common.white
  },
}));

export default function Footer(props) {
  const {...rest} = props;

  const classes = useStyles();

  return (
      <footer {...rest}>
        <Box p={3} display='flex' justifyContent="center" alignItems="center" className={classes.root}>
          <Link href='https://quintessential.gr' variant="body1" color='inherit'
                target="_blank" rel="noopener">
            <img src={FooterImage} alt={'COVID-footer-image'}/>
          </Link>
        </Box>
      </footer>
  );
}

