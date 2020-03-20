import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from 'react-redux';
import {getCovidDataRange} from '../redux/thunks';
import LiveDataChartSection from "../components/LiveDataChartSection";
import moment from "moment";
import {getCOVIDDataCountries} from "../requests";
import {orderBy} from "lodash";

const LiveData = () => {
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

    return (
        <LiveDataChartSection data={covidDataRange.data} allCountries={allCountries} countries={countries}
                              setCountries={setCountries}
                              startDate={startDate} setStartDate={setStartDate}
                              endDate={endDate} setEndDate={setEndDate}/>
    )
};

export default LiveData;