import React, {useEffect, useState} from "react"
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./utility/ErrorBoundary";
import EmergencyDrawer from "./EmergencyDrawer";
import {Box} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {ArrowUpward} from "@material-ui/icons";
import MobileMenuDrawer from "./MenuDrawer";

export const headerHeight = 71;

const headerTabs = [
  {uri: '/', tab: 'Live νέα'},
  {uri: '/government', tab: 'Αποφάσεις'},
  {uri: '/mythbusters', tab: 'Αλήθειες & μύθοι'},
  {uri: '/statistics', tab: 'Στατιστικά εξάπλωσης'},
  {uri: '/menoume-spiti', tab: 'Μένουμε σπίτι'},
  {uri: '/scientific', tab: 'Επιστημονική γνώμη'},
];
const headerContact = 'Έκτακτη ανάγκη;';

const Layout = ({children, uri}) => {

  const pageTab = () => {
    if (uri) {
      const splitUri = uri.split('/');
      const page = splitUri[splitUri.length - 1];
      switch (page) {
        case '':
          return 0;
        case 'government':
          return 1;
        case 'mythbusters':
          return 2;
        case 'statistics':
          return 3;
        case 'menoume-spiti':
          return 4;
        case 'scientific':
          return 5;
        default:
          return 0;
      }
    }
    return 0;
  };

  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);
  const [selected, setSelected] = useState(pageTab);
  const [mobileMenuDrawerOpen, setMobileMenuDrawerOpen] = useState(false);

  useEffect(() => {
    setSelected(pageTab);
  }, [uri]);

  const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
      <ErrorBoundary>
        <Header tabs={headerTabs} contact={headerContact}
                selected={selected} setSelected={setSelected}
                onContactClick={() => setContactDrawerOpen(true)}
                onMobileMenuClick={() => setMobileMenuDrawerOpen(true)}/>
        <main style={{minHeight: '100vh', overflowX: 'hidden'}}>
          <div style={{height: headerHeight, width: '100%'}}/>
          <Box display='flex' flexDirection='column'>
            {children}
          </Box>
        </main>
        <Footer/>
        <MobileMenuDrawer
            open={mobileMenuDrawerOpen}
            handleClose={() => setMobileMenuDrawerOpen(false)}
            handleOpen={() => setMobileMenuDrawerOpen(true)}
            menuItems={headerTabs}
            contactItem={headerContact}
            contactClick={() => setContactDrawerOpen(true)}/>
        <EmergencyDrawer
            open={contactDrawerOpen}
            handleClose={() => setContactDrawerOpen(false)}
            handleOpen={() => setContactDrawerOpen(false)}/>
        <Fab color={"secondary"} size={"small"} style={fabStyle} onClick={handleScrollToTop}>
          <ArrowUpward/>
        </Fab>
      </ErrorBoundary>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
