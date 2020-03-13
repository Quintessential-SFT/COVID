import React from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";

import tempImage from "../images/Group 1249.svg"

const GovernmentPage = () => (
  <>
    <SEO title="Κυρβενητικές αποφάσεις" />
    <Box>
      <Hero
          title={"Δημοσιεύσεις Υπουργείου υγείας, κυβερνητικές αποφάσεις, μέτρα προφύλαξης"}
          description={"Εδώ εμφανίζονται τελευταία νέα, ανακοινώσεις και δημοσιεύσεις από το Υπουργείο Υγείας και τους αρμόδιους κυβερνητικούς φορείς καθώς και χρήσιμες συμβουλές για το πως να προφυλαχθείτε από τον COVID 19"}
          image={tempImage}
      />
    </Box>
  </>
);

export default GovernmentPage
