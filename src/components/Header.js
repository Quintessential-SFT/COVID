import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {MailOutline} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import COVIDIcon from "../images/COVID-icon.svg"
import MuiLink from "./utility/MuiLink";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "gatsby";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    // backgroundColor: theme.palette.common.white
  },
  box: {
    flexGrow: 1,
  },
  iconContainer: {
    cursor: 'unset'
  },
  tabs: {
    marginRight: theme.spacing(2),
    height: '100%',
    "& .MuiTabs-flexContainer": {
      height: '100%'
    }
  },
  tabIndicator: {
    height: 6,
    borderRadius: theme.spacing(1),
  },
  tab: {
    textTransform: 'none',
    height: '100%'
  },
  contactButton: {
    textTransform: 'none',
    fontSize: 12
  },
}));

export default function Header(props) {
  const {tabs, selected = 0, setSelected, contact, onContactClick, ...rest} = props;

  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (selected !== selectedTab) {
      setSelectedTab(selected);
    }
  }, [selected]);

  const handleChange = (ev, newVal) => {
    setSelectedTab(newVal);
    setSelected(newVal);
  };

  return (
      <header {...rest}>
        <AppBar color={'white'} position='fixed' className={classes.appBar}>
          <Toolbar>
            <Grid container alignItems={"stretch"}>
              <Grid item lg={2} sm={3} xs={4}>
                <MuiLink to={'/'} className={classes.iconContainer}>
                  <IconButton><img src={COVIDIcon} alt={'COVID-icon'}/></IconButton>
                </MuiLink>
              </Grid>
              <Grid item lg={8} sm={6} xs={4} container justify={"center"}>
                <Tabs
                    className={classes.tabs}
                    variant="scrollable"
                    scrollButtons="auto"
                    value={tabs && selectedTab < tabs.length ? selectedTab : false}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    classes={{indicator: classes.tabIndicator}}>
                  {tabs && tabs.length > 0 && tabs.map((tab, index) => {
                    return (
                        <Tab
                            to={tab.uri}
                            component={Link}
                            label={tab.tab}
                            variant='h5'
                            className={classes.tab}

                            value={index}
                            key={index}
                        />
                    )
                  })}
                </Tabs>
              </Grid>
              <Grid item container lg={2} sm={3} xs={4} justify={"flex-end"} alignItems={"center"}>
                {contact &&
                <Button variant='contained' color={"secondary"} className={classes.contactButton} onClick={onContactClick}>{contact}</Button>
                }
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
  );
}
