import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import {useDispatch, useSelector} from "react-redux";
import {getCovidDataRange} from "../redux/thunks";
import NewsFrontPage from "../components/NewsFrontPage";
import moment from "moment";
import LiveDataChartSection from "../components/LiveDataChartSection";

const SpreadStats = ({data}) => {
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState(moment('01-22-2020', 'MM-DD-YYYY'));
  const [endDate, setEndDate] = useState(moment());

  const dispatch = useDispatch();
  const covidDataRange = useSelector(state => state.covidDataRange);

  useEffect(() => {
    dispatch(getCovidDataRange(startDate.format('MM-DD-YYYY'), endDate.format('MM-DD-YYYY')));
  }, []);

  if (!data || !data.prismicScientific) return '';
  const {data: pageData} = data.prismicScientific;

  console.log(covidDataRange);

  return (
      <>
        <SEO title="Στατιστικά εξάπλωσης"/>
        <Box>
          <Hero
              title={pageData.title}
              description={pageData.description}
              image={pageData.image ? pageData.image.url : null}
          />
          <LiveDataChartSection data={covidDataRange.data} countries={countries} setCountries={setCountries}/>
        </Box>
      </>
  )
};

export default SpreadStats

export const SpreadStatsPageQuery = graphql`
    query SpreadStatsPage {
        prismicScientific {
            data {
                title
                description
                image {
                    url
                }
                body {
                    ... on PrismicScientificBodyCardSection {
                        primary {
                            cardsection_title
                        }
                        items {
                            card_title
                            card_description
                            card_source
                            card_url {
                                url
                            }
                            card_image {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

