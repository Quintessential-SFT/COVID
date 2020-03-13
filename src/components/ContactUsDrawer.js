import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {Email} from "@material-ui/icons";
import ContactForm from "./forms/ContactForm";
import {SwipeableDrawer} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
}));

export default function ContactUsDrawer(props) {
  const {open, handleClose, handleOpen} = props;

  const classes = useStyles();

  return (
      <SwipeableDrawer
          disableSwipeToOpen
          ModalProps={{keepMounted: true}}
          id='contact-us-drawer'
          key='contact-us-drawer'
          anchor="right"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}>
        <Box
            display='flex' flexDirection='column' justifyContent='space-between' alignItems='stretch'
            p={4} role="presentation" id='contact-drawer-presentation'>
          <Box
              className={classes.marginBottom}
              display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant={'h2'}>Contact</Typography>
            <Typography variant={'h2'}><Email color="secondary" fontSize="inherit"/></Typography>
          </Box>
          <ContactForm handleClose={handleClose}/>
        </Box>
      </SwipeableDrawer>
  );
}
