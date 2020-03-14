import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import {getGreekCOVIDData, getWHONews} from "../requests";
import NewsTop from "../components/NewsTop";
import NewsFeed from "../components/NewsFeed";
import {makeStyles} from "@material-ui/core/styles";
import { connect, Provider } from 'react-redux';
import { getWHOData } from '../redux/thunks';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  },
}));

const IndexPage = (props) => {
  const [covidData, setCovidData] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    getGreekData();
    getWHONewsAction();
  }, []);

  const getGreekData = () => {
    getGreekCOVIDData()
        .then((result) => {
          console.log(result);
          setCovidData(result.data[0]);
        })
        .catch((e) => {
          console.log(e);
          // setError(`Greek COVID data fetch failed`);
        })
  };

  const getWHONewsAction = () => {
      props.dispatch(getWHOData());
  };

  return (
      <>
        <SEO title="Τελευταία νέα"/>
        <Box className={classes.root}>
          <NewsTop title={"Titlos"}
                   description={"Το covid.quintessential.gr αποτελεί ανεξάρτητη ιδιωτική πρωτοβουλία που δημιουργήθηκε για να παρέχει στους πολίτες ολοκληρωμένη και όσο το δυνατόν πιο εμπεριστατωμένη ενημέρωση σχετικά με την εξάπλωση του COVID-19. Δεν αποτελείται από γιατρούς και ειδικούς επιστήμονες, αλλά από επαγγελματίες προγραμματιστές με αίσθημα κοινωνικής ευθύνης που συστήνουν αμέριστη υπακοή στι γνώμη των επιστημόνων υγείας. "}
                   totalCases={covidData ? covidData.Confirmed: null} recoveredCases={covidData ? covidData.Recovered: null} deaths={covidData ? covidData.Deaths: null}
          />
          <NewsFeed data={props.feed.WHORssItems} loading={props.feed.loading}/>
        </Box>
      </>
  )
};

const mapStateToProps = state => {
  return {
    feed: state.feed
  }
}

export default connect(mapStateToProps)(IndexPage);
