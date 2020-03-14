import React from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Fact from "../images/COVID-fact.png";
import Hero from "../components/Hero";

const SecondPage = () => (
  <>
    <SEO title="Αλήθειες και μύθοι" />
    <Box>
      <Hero
          title={"Αλήθειες και μύθοι για τον COVID-19"}
          description={"Στην ενότητα εμφανίζεται πληροφοριακό υλικό από την ιστοσελίδα του Παγκόσμιου Οργανισμού Υγείας (ΠΟΥ), προσαρμοσμένο στα ελληνικά. \n Εκτός από τον COVID-19 επικίνδυνες είναι και οι ανυπόστατες φήμες και οι “αστικοί μύθοι” που δεν έχουν καμία επιστημονική βάση. \n Ας δούμε τι ισχύει και τι όχι σύμφωνα με τον ΠΟΥ"}
          image={Fact}
      />
    </Box>
  </>
);

export default SecondPage
