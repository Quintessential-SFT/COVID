import React, {useEffect, useState} from "react"
import SEO from "../components/utility/SEO"
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero";
import {graphql} from "gatsby";
import {useDispatch, useSelector} from "react-redux";
import {getCovidDataRange} from "../redux/thunks";
import moment from "moment";
import {getCOVIDDataCountries} from "../requests";
import {orderBy} from "lodash";
import StatCharts from "../components/StatCharts";

const SpreadStats = ({data}) => {
    const [countries, setCountries] = useState([]);
    const [startDate, setStartDate] = useState(moment('01-22-2020', 'MM-DD-YYYY'));
    const [endDate, setEndDate] = useState(moment());
    const [allCountries, setAllCountries] = useState();

    const dispatch = useDispatch();
    const covidDataRange = useSelector(state => state.covidDataRange);

    useEffect(() => {
        getCOVIDDataCountries()
            .then(res => {
                const filtered = res.data.filter(Boolean);
                const sorted = orderBy(filtered, [filtered => filtered.charAt(0)], ['asc']);
                setAllCountries(sorted)
            })
            .catch(console.log);
    }, []);

    useEffect(() => {
        dispatch(getCovidDataRange(startDate.format('MM-DD-YYYY'), endDate.format('MM-DD-YYYY'), countries));
    }, [startDate, endDate, countries]);

    if (!data || !data.prismicStatistics) return '';
    const {data: pageData} = data.prismicStatistics;

    return (
        <>
            <SEO title="Στατιστικά εξάπλωσης"/>
            <Box>
                <Hero
                    title={pageData.title}
                    description={pageData.description}
                    image={pageData.image ? pageData.image.url : null}
                />
                <StatCharts
                    title={'Στατιστικά'}
                    data={covidDataRange.data} allCountries={allCountries} countries={countries}
                    setCountries={setCountries}
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}/>
            </Box>
        </>
    )
};

export default SpreadStats

export const SpreadStatsPageQuery = graphql`
    query SpreadStatsPage {
        prismicStatistics {
            data {
                title
                description
                image {
                    url
                }
            }
        }
    }
`;

