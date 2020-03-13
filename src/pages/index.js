import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import {getWHONews} from "../actions";
import {parseString} from "xml2js";
import NewsTop from "../components/NewsTop";
import NewsFeed from "../components/NewsFeed";

const IndexPage = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getWHONewsAction()
  }, []);

  const getWHONewsAction = () => {
    setLoading(true);
    getWHONews()
        .then(res => {
          const data = res.data;
          parseString(data, function (err, result) {
            setLoading(false);
            if (err) {
              setError(err);
              setFeedData([]);
            } else {
              setError('');
              setFeedData(result.rss.channel[0].item);
            }
          });
        })
        .catch((e) => {
          console.log(e);
          setError(`Feed data fetch failed`);
          setLoading(false);
        })
  };

  return (
      <>
        <SEO title="Τελευταία νέα"/>
        <Box>
          <NewsTop title={"Titlos"}
                   description={"Το covid.quintessential.gr αποτελεί ανεξάρτητη ιδιωτική πρωτοβουλία που δημιουργήθηκε για να παρέχει στους πολίτες ολοκληρωμένη και όσο το δυνατόν πιο εμπεριστατωμένη ενημέρωση σχετικά με την εξάπλωση του COVID-19. Δεν αποτελείται από γιατρούς και ειδικούς επιστήμονες, αλλά από επαγγελματίες προγραμματιστές με αίσθημα κοινωνικής ευθύνης που συστήνουν αμέριστη υπακοή στι γνώμη των επιστημόνων υγείας. "}
                   totalCases={133} dailyCases={5} deaths={1}
          />
          <NewsFeed data={feedData}/>
        </Box>
      </>
  )
};

export default IndexPage
