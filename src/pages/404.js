import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";

const NotFoundPage = () => {

  return (
      <>
        <SEO title="404: Not found"/>
        <Box>
          <Typography variant='h4'>NOT FOUND</Typography>
          <Typography variant='body1'>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
          <MuiLink to="/" variant='body2' color='secondary'>Go back to the homepage</MuiLink>
        </Box>
      </>
  )
};

export default NotFoundPage
