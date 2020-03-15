import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import MuiLink from "./utility/MuiLink";

const useStyles = makeStyles(theme => ({
  rootPaper: {},
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(12),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    width: "240px",
    maxWidth: '90vw',
    height: '100vh',
    overflow: 'auto',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listItem: {
    width: '100% !important',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  listItemText: {
    textTransform: 'none',
    display: 'flex',
  },
  button: {
    textTransform: 'none',
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white
  }
}));

export default function MobileMenuDrawer(props) {
  const {
    open,
    handleClose,
    handleOpen,
    menuItems,
    contactItem,
    contactClick
  } = props;

  const classes = useStyles();

  const handleOnContactClick = () => {
    if (handleClose) {
      handleClose();
    }
    if (contactClick) {
      contactClick();
    }
  };

  return (
      <SwipeableDrawer
          ModalProps={{keepMounted: true}}
          PaperProps={{classes: {root: classes.rootPaper}}}
          id='menu-drawer'
          key='menu-drawer'
          anchor="right"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}>
        <div
            className={classes.content}
            role="presentation"
            id='menu-drawer-presentation'
        >
          <List>
            {menuItems && menuItems.map((item, index) => (
                <ListItem component={MuiLink} to={item.uri} key={index} underline={'none'}
                          className={classes.listItem}
                          onClick={handleClose}>
                  <ListItemText primary={item.tab}
                                className={classes.listItemText}
                                primaryTypographyProps={{variant: 'body1'}}/>
                </ListItem>
            ))}
          </List>
          {contactItem &&
          <Button
              fullWidth
              className={classes.button}
              component={MuiLink}
              to={contactItem.uri} underline={'none'}
              disableElevation
              variant="contained"
              size="medium"
              color="secondary"
              onClick={() => handleOnContactClick()}>
            {contactItem}
          </Button>
          }
        </div>
      </SwipeableDrawer>
  );
}
