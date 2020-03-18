import React, {useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux';
import {getFeedData} from '../redux/thunks';
import {getGreekCovidData} from '../redux/thunks';
import LiveDataSection from "../components/LiveDataSection";

const LiveData = () => {
    const greekCovidData = useSelector(state => state.greekCovidData);
    const {data: covidData} = greekCovidData;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGreekCovidData());
        dispatch(getFeedData());
    }, []);

    return (
        <LiveDataSection totalCases={covidData ? covidData.Confirmed : null}
                         recoveredCases={covidData ? covidData.Recovered : null}
                         deaths={covidData ? covidData.Deaths : null}/>
    )
};

export default LiveData;