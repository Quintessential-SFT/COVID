import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Remote from "../images/COVID-remotework.svg";
import Hero from "../components/Hero";
import NewsFrontPage from "../components/NewsFrontPage";
import {getWHONews} from "../actions";
import xml2js from "xml2js";

const SecondPage = () => {

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
          return xml2js.parseStringPromise(data);
        })
        .then((result) => {
          setLoading(false);
          setFeedData(result.rss.channel[0].item);
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setError(`WHO News data fetch failed`);
        })
  };

  return (
      <>
        <SEO title="Δουλειά από το σπίτι"/>
        <Box>
          <Hero
              title={"Δουλέυετε από το σπίτι λόγω των μέτρων προφύλαξης; "}
              description={"Στη συγκεκριμένη νεότητα θα βρείτε όλα εκείνα τα χρήσιμα εργαλεία που βοηθούν στην απομακρυσμένη εργασία και διασφαλίζουν την ομαλή επικοινωνία μεταξύ των ομάδων σας. Από την ομάδα της Quintessential, επιλέξαμε όλα εκείνα τα εργαλεία που βοηθούν την ενδοεταιρική μας παραγωγικότητα"}
              image={Remote}
          />
          <NewsFrontPage title={"Τελευταίες ανακοινώσεις υπουργείου υγείας"} data={feedData} color={'secondary'}
                         variant/>
          <NewsFrontPage title={"Υπουργικές αποφάσεις"} data={feedData} color={'secondary'}/>
        </Box>
      </>
  )
};

export default SecondPage
