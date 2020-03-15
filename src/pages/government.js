import React, {useEffect} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import NewsFrontPage from "../components/NewsFrontPage";
import VideoSection from "../components/VideoSection";
import {useDispatch, useSelector} from 'react-redux';
import {getFeedData} from '../redux/thunks';
import Instructions from "../components/Instructions";
import {graphql} from "gatsby";


const GovernmentPage = ({data}) => {
  // const dispatch = useDispatch();
  // const feed = useSelector(state => state.feed);

  useEffect(() => {
    // dispatch(getFeedData());
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
          {/*<NewsFrontPage title={"Ανακοινώσεις Υπουργείου Υγείας"} data={feed.FeedRssItems}*/}
          {/*               loading={feed.loading} variant/>*/}
          {/*<NewsFrontPage title={"Ανακοινώσεις ΕΟΔΥ"} data={feed.FeedRssItems} loading={feed.loading}/>*/}
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
            }
        }
    }
`;

