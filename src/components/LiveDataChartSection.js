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
import StatsColumnChart from "./StatsColumnChart";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import EmbedButtonDialog from "./EmbedButtonDialog";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3)
  },
  input: {
    "& .MuiSelect-select:focus": {
      backgroundColor: 'initial'
    }
  },
  gridContainer: {
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  chartContainer: {
    padding: '0 !important',
  },
  switchContainer: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    fontSize: 12,
  },
}));

const COVIDLiveStatisticsRangeEmbedCode = `<iframe name="COVIDLiveStatisticsRange" src="https://covid.quintessential.gr/live-statistics-range" width="1232" height="708" frameborder="0" scrolling="auto" class="frame-area"></iframe>`;


export default function LiveDataRangeChartSection(props) {
  const {data, allCountries, countries, setCountries, startDate, setStartDate, endDate, setEndDate, children, ...rest} = props;

  const [countrySelectOpen, setCountrySelectOpen] = useState(false);
  const [chartTypeColumn, setChartTypeColumn] = useState(false);

  const classes = useStyles();

  const statsChart = (data, typeCol) => {
    if (!data || !Array.isArray(data)) return null;

    if (typeCol) {
      return (<StatsColumnChart data={data}/>)
    } else {
      return (<StatsAreaChart data={data}/>);
    }
  };

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

  const handleChartTypeChange = (event) => {
    setChartTypeColumn(event.target.checked);
  };

  return (
      <Paper className={classes.paper} {...rest}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Container maxWidth={'lg'}>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item md={3} xs={12}>
                <FormControl color={"secondary"} fullWidth
                             margin={"normal"}>
                  <InputLabel id="country-multiple-checkbox-label">Επιλέξτε χώρες</InputLabel>
                  <Select
                      labelId="country-multiple-checkbox-label"
                      id="country-multiple-checkbox"
                      multiple
                      displayEmpty
                      onOpen={() => setCountrySelectOpen(true)}
                      onClose={() => setCountrySelectOpen(false)}
                      open={countrySelectOpen}
                      startAdornment={
                        <IconButton size={'small'}
                                    onClick={() => setCountrySelectOpen(true)}>
                          <FlagOutlined/>
                        </IconButton>}
                      value={countries ? countries : []}
                      onChange={handleChange}
                      input={<Input className={classes.input}/>}
                      renderValue={selected => {
                        if (selected.length === 0) {
                          return 'Όλες';
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
                    label="Από"
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
                    label="Έως"
                    value={endDate ? endDate.toDate() : null}
                    minDate={startDate ? startDate.toDate() : undefined}
                    disableFuture
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change end date',
                    }}
                />
              </Grid>
              <Grid item xs={12} className={classes.chartContainer}>
                {statsChart(data, chartTypeColumn)}
              </Grid>
              <Grid item container xs={12} justify={'flex-end'} className={classes.switchContainer}>
                <Typography component="div" variant={'inherit'}>
                  <Grid component="label" container alignItems="center">
                    <Grid item>Area</Grid>
                    <Grid item>
                      <Switch size={'small'} checked={chartTypeColumn}
                              onChange={handleChartTypeChange}
                              name="chartType"/>
                    </Grid>
                    <Grid item>Column</Grid>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <EmbedButtonDialog embedCode={COVIDLiveStatisticsRangeEmbedCode}/>
              </Grid>
            </Grid>
          </Container>
        </MuiPickersUtilsProvider>
      </Paper>
  );
}

