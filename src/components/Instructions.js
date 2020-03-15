import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import inst1 from "../images/instructions/Group 1311.svg"
import inst2 from "../images/instructions/Group 1310.svg"
import inst3 from "../images/instructions/Group 1312.svg"
import inst4 from "../images/instructions/Group 1315.svg"
import inst5 from "../images/instructions/Group 1317.svg"
import inst6 from "../images/instructions/Group 1319.svg"

import instM1 from "../images/instructions/mobile/Group 1311.svg"
import instM2 from "../images/instructions/mobile/Group 1367.svg"
import instM3 from "../images/instructions/mobile/Group 1372.svg"
import instM4 from "../images/instructions/mobile/Group 1369.svg"
import instM5 from "../images/instructions/mobile/Group 1370.svg"
import instM6 from "../images/instructions/mobile/Group 1371.svg"
import {Hidden} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#F1F3FF',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  infoBox: {
    marginBottom: theme.spacing(4)
  },
  title: {
    fontWeight: 700
  },
  description: {
    maxWidth: 540
  },
  source: {
    fontWeight: 500
  },
  instruction: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default function Instructions(props) {
  const {title, description, source, variant = false, ...rest} = props;

  const classes = useStyles();

  return (
      <Box
          className={classes.root} {...rest}>
        <Container maxWidth={"lg"} className={classes.container}>
          <Box className={classes.infoBox}>
            <Typography paragraph variant="h3" component="h2" color={"inherit"} className={classes.title}>
              {title}
            </Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="p" className={classes.description}>
              {description}
            </Typography>
            {source &&
            <Typography variant="body1" className={classes.source}>
              {'Πηγή: ' + source}
            </Typography>
            }
          </Box>
          <Hidden smDown initialWidth={'lg'}>
            <img src={inst1} alt={'covid-instruction-1'} className={classes.instruction}/>
            <img src={inst2} alt={'covid-instruction-2'} className={classes.instruction}/>
            <img src={inst3} alt={'covid-instruction-3'} className={classes.instruction}/>
            <img src={inst4} alt={'covid-instruction-4'} className={classes.instruction}/>
            <img src={inst5} alt={'covid-instruction-5'} className={classes.instruction}/>
            <img src={inst6} alt={'covid-instruction-6'} className={classes.instruction}/>
          </Hidden>
          <Hidden mdUp initialWidth={'lg'}>
            <img src={instM1} alt={'covid-instruction-1'} className={classes.instruction}/>
            <img src={instM2} alt={'covid-instruction-2'} className={classes.instruction}/>
            <img src={instM3} alt={'covid-instruction-3'} className={classes.instruction}/>
            <img src={instM4} alt={'covid-instruction-4'} className={classes.instruction}/>
            <img src={instM5} alt={'covid-instruction-5'} className={classes.instruction}/>
            <img src={instM6} alt={'covid-instruction-6'} className={classes.instruction}/>
          </Hidden>
        </Container>
      </Box>
  );
}

