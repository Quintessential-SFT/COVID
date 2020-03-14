import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import StayHome from "../images/COVID-stay-home.png"
import NewsFrontPage from "../components/NewsFrontPage";
import {getWHONews} from "../actions";
import xml2js from "xml2js";
import VideoSection from "../components/VideoSection";
import Instructions from "../components/Instructions";


const GovernmentPage = () => {

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
        <SEO title="Κυβερνητικές αποφάσεις"/>
        <Box>
          <Hero
              title={"Δημοσιεύσεις Υπουργείου υγείας, κυβερνητικές αποφάσεις, μέτρα προφύλαξης"}
              description={"Εδώ εμφανίζονται τελευταία νέα, ανακοινώσεις και δημοσιεύσεις από το Υπουργείο Υγείας και τους αρμόδιους κυβερνητικούς φορείς καθώς και χρήσιμες συμβουλές για το πως να προφυλαχθείτε από τον COVID 19"}
              image={StayHome}
          />
          <NewsFrontPage title={"Τελευταίες ανακοινώσεις υπουργείου υγείας"} data={feedData} loading={loading} variant/>
          <NewsFrontPage title={"Υπουργικές αποφάσεις"} data={feedData} loading={loading}/>
          <VideoSection title={"Πως να προστατευτείτε από τον ιό"}
                        embedUrl={"https://www.youtube.com/embed/1APwq1df6Mw"}/>
          <VideoSection variant title={"Πως να προστατευτείτε από τον ιό"}
                        embedUrl={"https://www.youtube.com/embed/1APwq1df6Mw"}/>
          <Instructions title={"Γενικές οδηγίες πρόληψης και δράσεις σε περίπτωση ύποπτων συμπτωμάτων"}
          description={"Εδώ εμφανίζονται τελευταία νέα, ανακοινώσεις και δημοσιεύσεις από το Υπουργείο Υγείας και τους αρμόδιους κυβερνητικούς φορείς καθώς και χρήσιμες συμβουλές για το πως να προφυλαχθείτε από τον COVID 19"}
          source={"Κυβέρνηση της Σλοβενίας: www.gov.si"}/>
        </Box>
      </>
  )
};

export default GovernmentPage
