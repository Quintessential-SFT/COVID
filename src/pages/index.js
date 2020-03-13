import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box>
      <Typography variant='h1'>Hi people</Typography>
      <Typography variant='h4'>Welcome to your new Gatsby site.</Typography>
      <Typography variant='body1'>Now go build something great.</Typography>
      <MuiLink to="/page-2/" variant='body2' color='secondary'>Go to page 2</MuiLink>
    </Box>
  </>
);

export default IndexPage
