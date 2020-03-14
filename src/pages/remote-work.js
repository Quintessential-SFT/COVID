import React, {useEffect} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Remote from "../images/COVID-remotework.svg";
import Hero from "../components/Hero";
import NewsFrontPage from "../components/NewsFrontPage";
import { useSelector, useDispatch } from 'react-redux';
import { getWHOData } from '../redux/thunks';

const SecondPage = () => {

  const feed = useSelector(state => state.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWHOData());
  }, []);

  return (
      <>
        <SEO title="Δουλειά από το σπίτι"/>
        <Box>
          <Hero
              title={"Δουλέυετε από το σπίτι λόγω των μέτρων προφύλαξης; "}
              description={"Στη συγκεκριμένη νεότητα θα βρείτε όλα εκείνα τα χρήσιμα εργαλεία που βοηθούν στην απομακρυσμένη εργασία και διασφαλίζουν την ομαλή επικοινωνία μεταξύ των ομάδων σας. Από την ομάδα της Quintessential, επιλέξαμε όλα εκείνα τα εργαλεία που βοηθούν την ενδοεταιρική μας παραγωγικότητα"}
              image={Remote}
          />
          <NewsFrontPage title={"Τελευταίες ανακοινώσεις υπουργείου υγείας"} data={feed.WHORssItems} color={'secondary'}
                         variant/>
          <NewsFrontPage title={"Υπουργικές αποφάσεις"} data={feed.WHORssItems} color={'secondary'}/>
        </Box>
      </>
  )
};

export default SecondPage
