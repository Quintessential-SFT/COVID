import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Box>
      <Typography variant='h2'>Hi from the second page</Typography>
      <Typography variant='body1'>Welcome to page 2</Typography>
      <MuiLink to="/" variant='body2' color='secondary'>Go back to the homepage</MuiLink>
    </Box>
  </>
);

export default SecondPage
