import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import {getWHONews} from "../actions";
import xml2js from "xml2js";
import NewsTop from "../components/NewsTop";
import NewsFeed from "../components/NewsFeed";
import {makeStyles} from "@material-ui/core/styles";
import NewsFrontPage from "../components/NewsFrontPage";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100]
  },
}));

const IndexPage = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const classes = useStyles();

  useEffect(() => {
    getWHONewsAction()
  }, []);

  const getWHONewsAction = () => {
    setLoading(true);
    getWHONews()
        .then(res => {
          const data = res.data;
          return xml2js.parseStringPromise(data);
        })
        .then((result) => {
          setFeedData(result.rss.channel[0].item);
        })
        .catch((e) => {
          console.log(e);
          setError(`WHO News data fetch failed`);
          setLoading(false);
        })
  };

  return (
      <>
        <SEO title="Τελευταία νέα"/>
        <Box className={classes.root}>
          <NewsTop title={"Titlos"}
                   description={"Το covid.quintessential.gr αποτελεί ανεξάρτητη ιδιωτική πρωτοβουλία που δημιουργήθηκε για να παρέχει στους πολίτες ολοκληρωμένη και όσο το δυνατόν πιο εμπεριστατωμένη ενημέρωση σχετικά με την εξάπλωση του COVID-19. Δεν αποτελείται από γιατρούς και ειδικούς επιστήμονες, αλλά από επαγγελματίες προγραμματιστές με αίσθημα κοινωνικής ευθύνης που συστήνουν αμέριστη υπακοή στι γνώμη των επιστημόνων υγείας. "}
                   totalCases={133} dailyCases={5} deaths={1}
          />
          <NewsFeed data={feedData} loading={loading}/>
        </Box>
      </>
  )
};

export default IndexPage
