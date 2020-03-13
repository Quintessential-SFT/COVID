import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";
import FeedCard from "../components/FeedCard";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box>
      <Typography variant='h1'>Hi people</Typography>
      <Typography variant='h4'>Welcome to your new Gatsby site.</Typography>
      <Typography variant='body1'>Now go build something great.</Typography>
      <MuiLink to="/page-2/" variant='body2' color='secondary'>Go to page 2</MuiLink>
      <FeedCard title={'Non dolore ea esse excepteur voluptate nulla magna sint eiusmod elit laboris.'}
      paragraph={"Magna velit adipisicing pariatur reprehenderit ipsum. Ad dolor pariatur proident pariatur ipsum esse. Eu Lorem consequat nostrud et elit excepteur. Velit excepteur culpa enim enim amet non."}
      source={"onomapigis.gr"} url={"https://quintessential.gr"} image={"https://source.unsplash.com/random"}/>
    </Box>
  </>
);

export default IndexPage
