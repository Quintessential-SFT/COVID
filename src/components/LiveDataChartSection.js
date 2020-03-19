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
import CovidStatsChart from "./CovidStatsChart";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3)
    },
    formControl: {},
    input: {
        "& .MuiSelect-select:focus": {
            backgroundColor: 'initial'
        }
    },
    gridContainer: {
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    }
}));

export default function LiveDataRangeChartSection(props) {
    const {data, allCountries, countries, setCountries, startDate, setStartDate, endDate, setEndDate, ...rest} = props;

    const [countrySelectOpen, setCountrySelectOpen] = useState(false);

    const classes = useStyles();

    const handleChange = event => {
        if (setCountries) {
            setCountries(event.target.value);
        }
    };

    const handleStartDateChange = date => {
        if (setStartDate) {
            setStartDate(moment(date));
        }
    };

    const handleEndDateChange = date => {
        if (setEndDate) {
            setEndDate(moment(date));
        }
    };

    return (
        <>
            <Paper className={classes.paper} {...rest}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Container maxWidth={'lg'}>
                        <Grid container spacing={2} className={classes.gridContainer}>
                            <Grid item md={3} xs={12}>
                                <FormControl color={"secondary"} className={classes.formControl} fullWidth
                                             margin={"normal"}>
                                    <InputLabel id="country-multiple-checkbox-label">Countries</InputLabel>
                                    <Select
                                        labelId="country-multiple-checkbox-label"
                                        id="country-multiple-checkbox"
                                        multiple
                                        displayEmpty
                                        onOpen={() => setCountrySelectOpen(true)}
                                        onClose={() => setCountrySelectOpen(false)}
                                        open={countrySelectOpen}
                                        startAdornment={<IconButton size={'small'}
                                                                    onClick={() => setCountrySelectOpen(true)}><FlagOutlined/></IconButton>}
                                        value={countries ? countries : []}
                                        onChange={handleChange}
                                        input={<Input className={classes.input}/>}
                                        renderValue={selected => {
                                            if (selected.length === 0) {
                                                return 'All';
                                            }

                                            return selected.join(', ');
                                        }}
                                    >
                                        {allCountries && allCountries.map(country => (
                                            <MenuItem key={country} value={country}>
                                                <Checkbox checked={countries && countries.indexOf(country) > -1}/>
                                                <ListItemText primary={country}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} xs={12} style={{padding: 0}}/>
                            <Grid item md={3} xs={6}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    fullWidth
                                    variant="inline"
                                    color={'secondary'}
                                    format="DD/MM/YYYY"
                                    margin="normal"
                                    id="start-date-picker"
                                    label="Start Date"
                                    value={startDate ? startDate.toDate() : null}
                                    minDate={moment('01-22-2020', 'MM-DD-YYYY').toDate()}
                                    maxDate={endDate ? endDate.toDate() : undefined}
                                    onChange={handleStartDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change start date',
                                    }}
                                />
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    fullWidth
                                    variant="inline"
                                    color={'secondary'}
                                    format="DD/MM/YYYY"
                                    margin="normal"
                                    id="end-date-picker"
                                    label="End Date"
                                    value={endDate ? endDate.toDate() : null}
                                    minDate={startDate ? startDate.toDate() : undefined}
                                    disableFuture
                                    onChange={handleEndDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change end date',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        {data && Array.isArray(data) &&
                        <CovidStatsChart data={data}/>
                        }
                    </Container>
                </MuiPickersUtilsProvider>
            </Paper>
        </>
    );
}

