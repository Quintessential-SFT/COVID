import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MuiLink from "./utility/MuiLink";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import ButtonBase from "@material-ui/core/ButtonBase";
import EmbedInstructions from "../images/LIVEDATA-embed-instructions.svg";
import EmbedCopyButton from "../images/LIVEDATA-embed-copy-button.svg";
import Input from "@material-ui/core/Input";
import Grow from "@material-ui/core/Grow";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3)
  },
  titleContainer: {
    marginBottom: theme.spacing(2)
  },
  dot: {
    backgroundColor: "#FF4752",
    borderRadius: '50%',
    height: 12,
    width: 12,
    marginRight: theme.spacing(1)
  },
  borderBox: {
    height: '100%',
    border: '1px solid rgba(0, 0, 0, 0.87)',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  blueColor: {
    color: '#6C63FF'
  },
  source: {
    fontSize: 12
  },
  textTransformNone: {
    textTransform: 'none'
  },
  instructions: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  codeContainer: {
    height: '100%',
    background: theme.palette.grey[100],
    padding: theme.spacing(4),
    overflowWrap: 'break-word',
  }
}));

const embedCode = `<iframe name="COVIDLiveData" src="https://covid.quintessential.gr/live-data" width="584" height="339" frameborder="0" scrolling="auto" class="frame-area"></iframe>`;

export default function LiveDataSection(props) {
  const {totalCases, recoveredCases, deaths, ...rest} = props;

  const [openEmbed, setOpenEmbed] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [showCopyMessage, setShowCopyMessage] = React.useState(false);

  const embedCodeTextArea = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    if (copySuccess) {
      setCopySuccess('');
      if (!showCopyMessage) {
        setShowCopyMessage(true);
        const timeout = setTimeout(() => {
          setShowCopyMessage(false);
          clearTimeout(timeout);
        }, 6000)
      }
    }
  }, [copySuccess]);

  const copyEmbedCode = () => {
    if (!embedCodeTextArea.current) return;
    embedCodeTextArea.current.select();
    document.execCommand('copy');
    embedCodeTextArea.current.selectionStart = embedCodeTextArea.current.selectionEnd;
    setCopySuccess('Copied!');
  };

  return (
    <>
      <Paper className={classes.paper} {...rest}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} container alignItems={"center"} className={classes.titleContainer}>
            <Box className={classes.dot}/>
            <Typography variant={"body1"}>Live στατιστικά, Ελλάδα</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
              <Typography noWrap variant={"body2"}>Σύνολο κρουσμάτων</Typography>
              <Typography variant={"h6"}>{totalCases ? totalCases : '-'}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
              <Typography noWrap variant={"body2"}>Αναρρώσεις</Typography>
              <Typography variant={"h6"}>{recoveredCases ? recoveredCases : '-'}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>
              <Typography noWrap variant={"body2"}>Απώλειες</Typography>
              <Typography variant={"h6"}>{deaths ? deaths : "-"}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} container justify={"flex-start"}>
            <Typography noWrap variant={"body2"} color="inherit"
                        className={clsx(classes.source, classes.blueColor)}>
              By: <MuiLink href={"https://www.quintessential.gr/"}>Quintessential SFT</MuiLink>
            </Typography>
          </Grid>
          <Grid item xs={6} container justify={"flex-end"}>
            <Typography noWrap variant={"body2"} color="textSecondary"
                        className={classes.source}>Πηγή: <MuiLink href={"https://coronavirus.jhu.edu/"}>Johns
              Hopkins</MuiLink></Typography>
          </Grid>
          {document.queryCommandSupported('copy') &&
            <Grid item xs={12}>
              <Button color={'secondary'} variant={'contained'} fullWidth className={classes.textTransformNone}
                      onClick={() => setOpenEmbed(true)}>
                Επισύναψη στο site σου
              </Button>
            </Grid>
          }
        </Grid>
      </Paper>

      <Dialog
        maxWidth={'md'}
        open={openEmbed}
        onClose={() => setOpenEmbed(false)}
        aria-labelledby="embed-dialog-title"
        aria-describedby="embed-dialog-description">
        <DialogTitle id="embed-dialog-title">{"Χρησιμοποιείστε την κάρτα των Live στατιστικών στο site σας"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" variant={'h5'} color={'textPrimary'}>
            Οδηγίες χρήσης:
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img src={EmbedInstructions} alt={'embed-instructions'} className={classes.instructions}/>
              <ButtonBase onClick={copyEmbedCode}>
                <img src={EmbedCopyButton} alt={'embed-copy-button'}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.codeContainer}>
                <Input inputRef={embedCodeTextArea} disableUnderline multiline fullWidth readOnly value={embedCode}/>
              </Paper>
            </Grid>
          </Grid>
          <Grow in={showCopyMessage} timeout={600}>
            <Typography noWrap variant={"body2"} color="inherit"
                        className={classes.blueColor}>
              Αντιγράφηκε!
            </Typography>
          </Grow>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEmbed(false)}
                  color="secondary" variant={'contained'} className={classes.textTransformNone} autoFocus>
            Κλείσιμο
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

