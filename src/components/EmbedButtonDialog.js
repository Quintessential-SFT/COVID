import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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

export default function EmbedButtonDialog(props) {
    const {embedCode, ...rest} = props;

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

    const copyButtonComponent = () => {
        if (typeof window === 'undefined' || !document || !document.queryCommandSupported('copy')) {
            return null;
        }
        return (
            <>
                <ButtonBase onClick={copyEmbedCode}>
                    <img src={EmbedCopyButton} alt={'embed-copy-button'}/>
                </ButtonBase>
                <Grow in={showCopyMessage} timeout={600}>
                    <Typography noWrap variant={"body2"} color="inherit"
                                className={classes.blueColor}>
                        Αντιγράφηκε!
                    </Typography>
                </Grow>
            </>
        )
    };

    return (
        <>
            <Button color={'secondary'} variant={'contained'} fullWidth className={classes.textTransformNone}
                    onClick={() => setOpenEmbed(true)} {...rest}>
                Επισύναψη στο site σου
            </Button>
            <Dialog
                maxWidth={'md'}
                open={openEmbed}
                onClose={() => setOpenEmbed(false)}
                aria-labelledby="embed-dialog-title"
                aria-describedby="embed-dialog-description">
                <DialogTitle
                    id="embed-dialog-title">{"Χρησιμοποιείστε την κάρτα των Live στατιστικών στο site σας"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" variant={'h5'} color={'textPrimary'}>
                        Οδηγίες χρήσης:
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={EmbedInstructions} alt={'embed-instructions'} className={classes.instructions}/>
                            {copyButtonComponent()}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper className={classes.codeContainer}>
                                <Input inputRef={embedCodeTextArea} disableUnderline multiline fullWidth readOnly
                                       value={embedCode}/>
                            </Paper>
                        </Grid>
                    </Grid>
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

