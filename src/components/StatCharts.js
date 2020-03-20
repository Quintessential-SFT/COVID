import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import {FlagOutlined} from "@material-ui/icons";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import {Container} from "@material-ui/core";
import StatsAreaChart from "./StatsAreaChart";
import Box from "@material-ui/core/Box";
import LiveDataChartSection from "./LiveDataChartSection";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {headerHeight} from "./Layout";


const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${headerHeight}px)`,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.grey[100]
    },
    container: {
        minHeight: `calc(100vh - ${headerHeight}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    underline: {
        height: 3,
        width: 166,
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(2),
        background: theme.palette.common.black,
    },
    underlinePrimary: {
        background: theme.palette.primary.main
    },
    underlineSecondary: {
        background: theme.palette.secondary.main
    },
}));

export default function StatCharts(props) {
    const {title, color = 'primary', containerProps, ...rest} = props;

    const classes = useStyles();

    return (
        <Box p={2} className={classes.root} {...containerProps}>
            <Container maxWidth={"lg"} className={classes.container}>
                {title &&
                <Box p={4} className={classes.titleBox}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Box
                        className={color === 'primary' ? clsx(classes.underline, classes.underlinePrimary)
                            : color === 'secondary' ? clsx(classes.underline, classes.underlineSecondary)
                                : classes.underline}/>
                </Box>
                }
                <LiveDataChartSection {...rest}/>
            </Container>
        </Box>
    );
}

