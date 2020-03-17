import React, {useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import {groupBy} from "lodash"
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {makeStyles} from "@material-ui/core/styles";
import {mapCardSectionPrismicItems} from "../utils/prismicSlices";
import NewsFrontPage from "../components/NewsFrontPage";

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: theme.palette.grey[100]
  },
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    maxWidth: '100%',
  },
  tabs: {
    maxWidth: '100%',
  },
  tab: {
    textTransform: 'none'
  }
}));

const WorkFromHome = ({data}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const classes = useStyles();

  if (!data || !data.prismicWorkFromHome) return '';
  const {data: pageData} = data.prismicWorkFromHome;

  const handleChange = (ev, newVal) => {
    setSelectedTab(newVal);
  };

  const createTabs = (data, selectedTab) => {
    if (!data) return null;

    const groupedByCategory = groupBy(data, "primary.cardsection_category");
    const tabs = Object.keys(groupedByCategory);

    return (
        <Box py={4} className={classes.tabsContainer} key={'tabs-container'}>
          <Tabs
              className={classes.tabs}
              variant="scrollable"
              scrollButtons="auto"
              value={tabs && selectedTab < tabs.length ? selectedTab : false}
              onChange={handleChange}
              indicatorColor='secondary'>
            {tabs && tabs.length > 0 && tabs.map((tab, index) => {
              return (
                  <Tab
                      className={classes.tab}
                      label={tab}
                      value={index}
                      key={`tab-${index}`}
                  />
              )
            })}
          </Tabs>
        </Box>
    )
  };

  const createTabContent = (data, selectedTab) => {
    if (!data) return null;

    const groupedByCategory = groupBy(data, "primary.cardsection_category");
    const tabs = Object.keys(groupedByCategory);

    if (!tabs || !tabs[selectedTab] || !groupedByCategory[tabs[selectedTab]]) return null;

    const tabContent = groupedByCategory[tabs[selectedTab]];

    return (
        <>
          {tabContent.map((section, ind) => {
            const formatedData = mapCardSectionPrismicItems(section.items);
            return (
                <NewsFrontPage key={ind}
                               variant color={'secondary'}
                               title={section.primary ? section.primary.cardsection_title : null}
                               data={formatedData}/>
            )
          })
          }
        </>
    );
  };

  return (
      <>
        <SEO title="Μένουμε σπίτι"/>
        <Box>
          <Hero
              title={pageData.title}
              description={pageData.description}
              image={pageData.image ? pageData.image.url : null}
          />
          <Box className={classes.box}>
            {createTabs(pageData.body, selectedTab)}
            {createTabContent(pageData.body, selectedTab)}
          </Box>
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
                    ... on PrismicWorkFromHomeBodyCardSection {
                        primary {
                            cardsection_category
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

