import React, {useState} from "react"
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "./utility/ErrorBoundary";
import ContactUsDrawer from "./ContactUsDrawer";
import {Box} from "@material-ui/core";

export const headerHeight = 64;

const Layout = ({children}) => {
  const [contactDrawerOpen, setContactDrawerOpen] = useState(false);

  return (
      <ErrorBoundary>
        <Header height={headerHeight} onContactClick={() => setContactDrawerOpen(true)}/>
        <main style={{minHeight: '100vh'}}>
          <div style={{height: headerHeight, width: '100%'}}/>
          <Box p={6} display='flex' flexDirection='column'>
            {children}
          </Box>
        </main>
        <Footer/>
        <ContactUsDrawer
            open={contactDrawerOpen}
            handleClose={() => setContactDrawerOpen(false)}
            handleOpen={() => setContactDrawerOpen(false)}/>
      </ErrorBoundary>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
