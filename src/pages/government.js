import React, {useEffect} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Instructions from "../components/Instructions";
import NewsFrontPage from "../components/NewsFrontPage";
import {useDispatch, useSelector} from 'react-redux';
import {graphql} from "gatsby";
import {getGovernmentData} from "../redux/thunks";
import {mapCardSectionPrismicItems} from "../utils/prismicSlices";


const GovernmentPage = ({data}) => {
  const dispatch = useDispatch();
  const govNews = useSelector(state => state.governmentNews);

  useEffect(() => {
    dispatch(getGovernmentData());
  }, []);

  if (!data || !data.prismicGovernment) return '';
  const {data: pageData} = data.prismicGovernment;

  return (
      <>
        <SEO title="Κυβερνητικές αποφάσεις"/>
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
                               variant={ind % 2 === 0}
                               title={section.primary ? section.primary.cardsection_title : null}
                               data={formatedData}/>
            )
          })}
          <NewsFrontPage limit={3} title={"Ανακοινώσεις ΕΟΔΥ"} data={govNews.GovernmentNewsRssItems} loading={govNews.loading}/>
          {pageData.video_section && pageData.video_section.map((vid, ind) => {
            return (
                <VideoSection key={ind} variant={ind % 2 === 1}
                              title={vid.video_section_title}
                              embedUrl={vid.video_section_embed_url}/>
            )
          })}
          <Instructions title={pageData.instructions_title}
                        description={pageData.instructions_description}
                        source={pageData.instructions_source}/>
        </Box>
      </>
  )
};

export default GovernmentPage

export const governmentPageQuery = graphql`
    query GovernmentPage {
        prismicGovernment {
            data {
                title
                description
                image {
                    url
                }
                video_section {
                    video_section_title
                    video_section_embed_url
                }
                instructions_title
                instructions_description
                instructions_source
                body {
                    ... on PrismicGovernmentBodyCardSection {
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

