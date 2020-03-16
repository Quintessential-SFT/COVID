import React from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import NewsFrontPage from "../components/NewsFrontPage";
import {mapCardSectionPrismicItems} from "../utils/prismicSlices";

const Scientific = ({data}) => {
  if (!data || !data.prismicScientific) return '';
  const {data: pageData} = data.prismicScientific;

  return (
      <>
        <SEO title="Επιστημονικη γνώμη"/>
        <Box>
          <Hero
              title={pageData.title}
              description={pageData.description}
              image={pageData.image ? pageData.image.url : null}
          />
          {pageData.body && pageData.body.map((section, ind) => {
            const formatedData = mapCardSectionPrismicItems(section.items);
            return (
                <NewsFrontPage key={ind}
                               variant={ind % 2 === 0} color={'secondary'}
                               title={section.primary ? section.primary.cardsection_title : null}
                               data={formatedData}/>
            )
          })}
        </Box>
      </>
  )
};

export default Scientific

export const ScientificPageQuery = graphql`
    query ScientificPage {
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

