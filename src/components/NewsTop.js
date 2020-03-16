import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import MuiLink from "./utility/MuiLink";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
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
  source: {
    fontSize: 12
  }
}));

export default function NewsTop(props) {
  const {title, description, totalCases, recoveredCases, deaths, ...rest} = props;

  const classes = useStyles();

  return (
      <Container maxWidth={"lg"} className={classes.root} {...rest}>
        <Grid container alignItems={"center"}>
          <Grid item md={6} xs={12} className={classes.container}>
            <Box p={2}>
              <Typography gutterBottom variant="h4" component="h2">
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {description}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box p={2}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
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
                      <Typography noWrap variant={"body2"}>Θάνατοι</Typography>
                      <Typography variant={"h6"}>{deaths ? deaths : "-"}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} container justify={"flex-end"}>
                    <Typography noWrap variant={"body2"} color="textSecondary" className={classes.source}>Πηγή: <MuiLink href={"https://coronavirus.jhu.edu/"}>Johns Hopkins</MuiLink></Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
}

