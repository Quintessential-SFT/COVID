import React, {useEffect, useState} from "react"
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./utility/ErrorBoundary";
import EmergencyDrawer from "./EmergencyDrawer";
import {Box} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {ArrowUpward} from "@material-ui/icons";

export const headerHeight = 71;

const headerTabs = [
  {uri: '/', tab: 'Τελευταία νέα'},
  {uri: '/government', tab: 'Κυρβενητικές αποφάσεις'},
  {uri: '/facts', tab: 'Αλήθειες και μύθοι'},
  {uri: '/remote-work', tab: 'Δουλειά από το σπίτι'},
];
const headerContact = 'Κουμπί έκτακτης ανάγκης';

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
        case 'facts':
          return 2;
        case 'remote-work':
          return 3;
        default:
          return 0;
      }
    }
    return 0;
  };

  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);
  const [selected, setSelected] = useState(pageTab);

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
                onContactClick={() => setContactDrawerOpen(true)}/>
        <main style={{minHeight: '100vh'}}>
          <div style={{height: headerHeight, width: '100%'}}/>
          <Box display='flex' flexDirection='column'>
            {children}
          </Box>
        </main>
        <Footer/>
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
