import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import {getGreekCOVIDData, getWHONews} from "../requests";
import NewsTop from "../components/NewsTop";
import NewsFeed from "../components/NewsFeed";
import {makeStyles} from "@material-ui/core/styles";
import { connect, Provider } from 'react-redux';
import { getWHOData } from '../redux/thunks';
import { getGreekCovidData } from '../redux/thunks/greekCovidData';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  },
}));

const IndexPage = (props) => {
  const { feed, greekCovidData } = props;
  const { data: covidData } = greekCovidData;
  const classes = useStyles();

  useEffect(() => {
    props.dispatch(getGreekCovidData());
    props.dispatch(getWHOData());
  }, []);

  return (
      <>
        <SEO title="Τελευταία νέα"/>
        <Box className={classes.root}>
          <NewsTop title={"Titlos"}
                   description={"Το covid.quintessential.gr αποτελεί ανεξάρτητη ιδιωτική πρωτοβουλία που δημιουργήθηκε για να παρέχει στους πολίτες ολοκληρωμένη και όσο το δυνατόν πιο εμπεριστατωμένη ενημέρωση σχετικά με την εξάπλωση του COVID-19. Δεν αποτελείται από γιατρούς και ειδικούς επιστήμονες, αλλά από επαγγελματίες προγραμματιστές με αίσθημα κοινωνικής ευθύνης που συστήνουν αμέριστη υπακοή στι γνώμη των επιστημόνων υγείας. "}
                   totalCases={covidData ? covidData.Confirmed: null} recoveredCases={covidData ? covidData.Recovered: null} deaths={covidData ? covidData.Deaths: null}
          />
          <NewsFeed data={feed.WHORssItems} loading={feed.loading}/>
        </Box>
      </>
  )
};

const mapStateToProps = state => {
  const { feed, greekCovidData } = state;
  return {
    feed,
    greekCovidData
  }
}

export default connect(mapStateToProps)(IndexPage);
