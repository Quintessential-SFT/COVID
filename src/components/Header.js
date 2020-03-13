import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {MailOutline} from "@material-ui/icons";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
  },
  box: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const {height = 64, onContactClick, ...rest} = props;

  const classes = useStyles();

  return (
      <header {...rest}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar style={{height: height}}>
            <Box display='flex' justifyContent="space-between" alignItems="center" className={classes.box}>
              <Typography variant='h6'>Gatsby Material UI Website Starter</Typography>
              <Button variant='outlined' color='inherit' startIcon={<MailOutline/>} onClick={onContactClick}>Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </header>
  );
}
