import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {SwipeableDrawer} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Num1135 from "../images/COVID-1135.svg"
import ModalImage from "../images/COVID-modal.svg"
import Grid from "@material-ui/core/Grid";
import {Close} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 'min(620px, 90vw)',
    height: '100%',
  },
  purpleColor: {
    color: theme.palette.purple,
  },
  marginBottom: {
    marginBottom: theme.spacing(4),
  },
  marginBottomSmall: {
    marginBottom: theme.spacing(1),
  },
  image: {
    maxWidth: '100%'
  }
}));

export default function EmergencyDrawer(props) {
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
        <Grid container className={classes.container}>
          <Grid item xs={10}>
            <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='stretch'
                 p={4} role="presentation" id='contact-drawer-presentation' flex={1} height={"100%"}>
              <Box className={classes.marginBottom}>
                <Typography paragraph variant={'h4'} className={classes.purpleColor}>
                  Έκτακτη ανάγκη;
                </Typography>
                <Typography variant={'h6'}>Ψυχραιμία! Δες μπορείς να κάνεις.</Typography>
              </Box>
              <Box className={classes.marginBottom}>
                <Typography variant={'body2'} paragraph>
                  Χρειάζεσαι περαιτέρω ενημέρωση ή εμφανίζεις κάποιο σύμπτωμα; Τηλεφώνησε στον ΕΟΔΥ
                </Typography>
                <Typography variant={'body1'} className={classes.purpleColor} paragraph>
                  ΤΗΛΕΦΩΝΟ ΕΘΝΙΚΟΥ ΟΡΓΑΝΙΣΜΟΥ ΔΗΜΟΣΙΑΣ ΥΓΕΙΑΣ
                </Typography>
                <img src={Num1135} alt={'COVID-1135'}/>
              </Box>
              <Box className={classes.marginBottom}>
                <img src={ModalImage} alt={'COVID-modal'} className={classes.image}/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display='flex' justifyContent='flex-end' p={2}>
              <IconButton onClick={handleClose}><Close fontSize={"large"}/></IconButton>
            </Box>
          </Grid>
        </Grid>
      </SwipeableDrawer>
  );
}
