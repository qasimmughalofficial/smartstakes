import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux'
import SpecificEventView from './SpecificEventView';

function SpecificEvent(props) {
    const {sports, specificEvent} = props
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        let temp_url = 'https://07683plylj.execute-api.us-east-2.amazonaws.com/prod';
        let temp_complete_url = `${temp_url}/bettingMatchList?sport=${sports}`;
        fetch(temp_complete_url)
        .then((response) => response.text())
        .then((data) => {
            setLoader(false)
            if (data !== '') {
                setData((JSON.parse(data).data).filter(filterLeauge => filterLeauge.league == specificEvent));
            } else {
                setData([]);
            }
        })
        .catch((e) => console.log(e)); // eslint-disable-line no-console
    },[sports])

    return (
        <Provider store={store}>
            <Router>
                <div className='custom-container'>
                    <div className='betting-list-wrapper'>
                        {data.length ? <div className='content-match'><SpecificEventView data={data} currentSport={sports} loader={loader}/></div> : 
                            <div className='data-not-found'><h1>No matches right now... stay tuned</h1></div>
                        }
                    </div>
                </div>
            </Router>
        </Provider>
    )
}

export default SpecificEvent