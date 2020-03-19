import React, {useEffect, useRef, useState} from 'react';
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
import {Flag, FlagOutlined} from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3)
  },
  formControl: {

  },
  input: {
    "& .MuiSelect-select:focus": {
      backgroundColor: 'initial'
    }
  }
}));

const allCountries = ['greece', 'italy', 'albania'];

export default function LiveDataRangeChartSection(props) {
  const {data, countries, setCountries, startDate, setStartDate, endDate, setEndDate, ...rest} = props;

  const classes = useStyles();

  const handleChange = event => {
    console.log(event.target.value);
    if (setCountries) {
      setCountries(event.target.value);
    }
  };

  return (
    <>
      <Paper className={classes.paper} {...rest}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormControl color={"secondary"} variant="filled" className={classes.formControl} fullWidth>
              <InputLabel id="demo-mutiple-checkbox-label">Countries</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                displayEmpty
                value={countries ? countries : []}
                onChange={handleChange}
                input={<Input startAdornment={<FlagOutlined/>} className={classes.input}/>}
                renderValue={selected => {
                  if (selected.length === 0) {
                    return <em>All</em>;
                  }

                  return selected.join(', ');
                }}
              >
                {allCountries && allCountries.map(country => (
                  <MenuItem key={country} value={country}>
                    <Checkbox checked={countries && countries.indexOf(country) > -1} />
                    <ListItemText primary={country} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={3}>

          </Grid>
          <Grid item xs={3}>

          </Grid>

        </Grid>


        {/*<Grid container spacing={2}>*/}
        {/*  <Grid item xs={12} container alignItems={"center"} className={classes.titleContainer}>*/}
        {/*    <Box className={classes.dot}/>*/}
        {/*    <Typography variant={"body1"}>Live στατιστικά, Ελλάδα</Typography>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12}>*/}
        {/*    <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>*/}
        {/*      <Typography noWrap variant={"body2"}>Σύνολο κρουσμάτων</Typography>*/}
        {/*      <Typography variant={"h6"}>{totalCases ? totalCases : '-'}</Typography>*/}
        {/*    </Box>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={6}>*/}
        {/*    <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>*/}
        {/*      <Typography noWrap variant={"body2"}>Αναρρώσεις</Typography>*/}
        {/*      <Typography variant={"h6"}>{recoveredCases ? recoveredCases : '-'}</Typography>*/}
        {/*    </Box>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={6}>*/}
        {/*    <Box display={"flex"} flexDirection={"column"} className={classes.borderBox}>*/}
        {/*      <Typography noWrap variant={"body2"}>Απώλειες</Typography>*/}
        {/*      <Typography variant={"h6"}>{deaths ? deaths : "-"}</Typography>*/}
        {/*    </Box>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={6} container justify={"flex-start"}>*/}
        {/*    <Typography noWrap variant={"body2"} color="inherit"*/}
        {/*                className={clsx(classes.source, classes.blueColor)}>*/}
        {/*      By: <MuiLink href={"https://www.quintessential.gr/"}>Quintessential SFT</MuiLink>*/}
        {/*    </Typography>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={6} container justify={"flex-end"}>*/}
        {/*    <Typography noWrap variant={"body2"} color="textSecondary"*/}
        {/*                className={classes.source}>Πηγή: <MuiLink href={"https://coronavirus.jhu.edu/"}>Johns*/}
        {/*      Hopkins</MuiLink></Typography>*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12}>*/}
        {/*    <Button color={'secondary'} variant={'contained'} fullWidth className={classes.textTransformNone}*/}
        {/*            onClick={() => setOpenEmbed(true)}>*/}
        {/*      Επισύναψη στο site σου*/}
        {/*    </Button>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}

      </Paper>
    </>
  );
}

