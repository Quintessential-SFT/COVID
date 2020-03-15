import React from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import FactImg from "../images/COVID-fact.png";
import Hero from "../components/Hero";
import Fact from "../components/Fact";
import {graphql} from "gatsby";

const Mythbusters = ({data}) => {

  if (!data || !data.prismicMythbusters) return '';
  const { data: pageData } = data.prismicMythbusters;


  return (
      <>
        <SEO title="Αλήθειες και μύθοι"/>
        <Box>
          <Hero
              title={pageData.title}
              description={pageData.description}
              image={pageData.image ? pageData.image.url : null}
          />
          {pageData.facts && pageData.facts.map((fact, ind) => {
            return (
                <Fact
                    variant={ind % 2 === 1}
                    key={ind}
                    myth={fact.myth}
                    description={fact.fact_description}
                    fact={fact.fact}
                    image={fact.fact_image ? fact.fact_image.url : null}
                />
            )
          })}
        </Box>
      </>
  )
};

export default Mythbusters

export const mythbustersPageQuery = graphql`
    query MythbustersPage {
        prismicMythbusters {
            data {
                title
                description
                image {
                    url
                }
                facts {
                    myth
                    fact_description
                    fact
                    fact_image {
                        url
                    }
                }
            }
        }
    }
`;
