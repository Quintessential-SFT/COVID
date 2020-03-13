import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(16),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer(props) {
  const {...rest} = props;

  const classes = useStyles();

  return (
      <footer {...rest}>
        <Box p={3} display='flex' justifyContent="flex-end" alignItems="flex-end" className={classes.root}>
          <Link href='https://github.com/ssellas/gatsby-material-ui-website-starter' variant="body1" color='inherit'
                target="_blank" rel="noopener">
            Gatsby Material UI Website Starter
          </Link>
        </Box>
      </footer>
  );
}

