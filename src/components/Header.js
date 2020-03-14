import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Menu} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import COVIDIcon from "../images/COVID-icon.svg"
import MuiLink from "./utility/MuiLink";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "gatsby";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white
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
  icon: {
    height: 45,
    width: 45
  }
}));

export default function Header(props) {
  const {tabs, selected = 0, setSelected, contact, onContactClick, onMobileMenuClick, ...rest} = props;

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
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Grid container alignItems={"stretch"}>
              <Grid item md={2} xs={6}>
                <MuiLink to={'/'} className={classes.iconContainer}>
                  <IconButton><img src={COVIDIcon} alt={'COVID-icon'} className={classes.icon}/></IconButton>
                </MuiLink>
              </Grid>
              <Hidden smDown initialWidth={'lg'}>
                <Grid item md={8} xs={6} container justify={"center"}>
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
              </Hidden>
              <Grid item container md={2} xs={6} justify={"flex-end"} alignItems={"center"}>
                <Hidden smDown initialWidth={'lg'}>
                  {contact &&
                  <Button variant='contained' color={"secondary"} className={classes.contactButton}
                          onClick={onContactClick}>{contact}</Button>
                  }
                </Hidden>
                <Hidden mdUp initialWidth={'lg'}>
                  <Button variant='outlined' color={"secondary"} className={classes.contactButton}
                          onClick={onMobileMenuClick}>
                    <Menu/>
                  </Button>
                </Hidden>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
  );
}
