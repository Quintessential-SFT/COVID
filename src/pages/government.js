import React, {useEffect} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import StayHome from "../images/COVID-stay-home.png"
import NewsFrontPage from "../components/NewsFrontPage";
import VideoSection from "../components/VideoSection";
import { useDispatch, useSelector } from 'react-redux';
import { getWHOData } from '../redux/thunks';


const GovernmentPage = () => {
  const dispatch = useDispatch();
  const feed = useSelector(state => state.feed);

  useEffect(() => {
    dispatch(getWHOData());
  }, []);

  return (
      <>
        <SEO title="Κυρβενητικές αποφάσεις"/>
        <Box>
          <Hero
              title={"Δημοσιεύσεις Υπουργείου υγείας, κυβερνητικές αποφάσεις, μέτρα προφύλαξης"}
              description={"Εδώ εμφανίζονται τελευταία νέα, ανακοινώσεις και δημοσιεύσεις από το Υπουργείο Υγείας και τους αρμόδιους κυβερνητικούς φορείς καθώς και χρήσιμες συμβουλές για το πως να προφυλαχθείτε από τον COVID 19"}
              image={StayHome}
          />
          <NewsFrontPage title={"Τελευταίες ανακοινώσεις υπουργείου υγείας"} data={feed.WHORssItems} loading={feed.loading} variant/>
          <NewsFrontPage title={"Υπουργικές αποφάσεις"} data={feed.WHORssItems} loading={feed.loading}/>
          <VideoSection title={"Πως να προστατευτείτε από τον ιό"}
                        embedUrl={"https://www.youtube.com/embed/1APwq1df6Mw"}/>
          <VideoSection variant title={"Πως να προστατευτείτε από τον ιό"}
                        embedUrl={"https://www.youtube.com/embed/1APwq1df6Mw"}/>
        </Box>
      </>
  )
};

export default GovernmentPage
