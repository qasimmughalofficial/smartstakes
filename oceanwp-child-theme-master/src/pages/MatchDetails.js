import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BettingDetailsList from '../Components/BettingDetails/BettingDetailsList'
import { currentMatches, currentSports, currentURL } from '../redux/commonAction'

function MatchDetails() {
    // For fetching the Url Bulid-in function useParams() react-router-dom
    const {sportURL, matchID } = useParams()
    // For fetching the Url Bulid-in function useParams() react-router-dom
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const matchURL = useSelector(state => state.matchURL)
    const matchDetail = useSelector(state => state.matchDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!matchURL.length) {
            let temp_url = `sport=${sportURL}&matchId=${matchID}`;
            dispatch(currentURL(temp_url))
            dispatch(currentSports(sportURL))
        }
    },[sportURL && matchID])

    // From Redux Calling API
    useEffect(() => {
        setLoader(true)
        const url = `https://07683plylj.execute-api.us-east-2.amazonaws.com/prod/bettingMatchPage?${matchURL}`;
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                setLoader(false)
                if (data !== '') {
                    setData(JSON.parse(data).data);
                }                let temp_team = null
                JSON.parse(data).data.map(match => temp_team = `${match.team} vs ${match.opp}`)
                dispatch(currentMatches(temp_team))
            })
            .catch((e) => console.log(e));
    },[matchURL])
    return (
        <>
            <BettingDetailsList data={data} loader={loader}/>
        </>
    )
}

export default MatchDetails