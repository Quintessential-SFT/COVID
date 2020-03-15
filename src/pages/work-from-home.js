import React from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import NewsFrontPage from "../components/NewsFrontPage";
import {mapCardSectionPrismicItem} from "../utils/prismicSlices";

const WorkFromHome = ({data}) => {
  if (!data || !data.prismicWorkFromHome) return '';
  const { data: pageData } = data.prismicWorkFromHome;

  return (
      <>
        <SEO title="Δουλειά από το σπίτι"/>
        <Box>
          <Hero
              title={pageData.title}
              description={pageData.description}
              image={pageData.image ? pageData.image.url : null}
          />
          {pageData.body && pageData.body.map((section, ind) => {
            const formatedData = mapCardSectionPrismicItem(section.items);
            return (
                <NewsFrontPage key={ind}
                               variant={ind % 2 === 0} color={'secondary'}
                               title={section.primary ? section.primary.cardsection_title : null}
                               data={formatedData} />
            )
          })}

        </Box>
      </>
  )
};

export default WorkFromHome

export const WorkFromHomePageQuery = graphql`
    query WorkFromHomePage {
        prismicWorkFromHome {
            data {
                title
                description
                image {
                    url
                }
                body {
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
`;

