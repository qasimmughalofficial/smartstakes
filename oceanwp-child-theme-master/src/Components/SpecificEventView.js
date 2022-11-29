import React from 'react'
import { useDispatch } from 'react-redux'
import arrowRight from '../assets/right-arrow.svg'
import loaderGif from '../assets/stakes.gif'
import { currentMatches, currentURL } from '../redux/commonAction'

function SpecificEventView(props) {
    const { data, currentSport, loader } = props
    const dispatch = useDispatch()

    // Skip in Array for Duplication of Date
    let prev_date = null
    function duplicateDate (date) {
        if (prev_date === date) {
        } else {
            prev_date = date
            return <h5 className='list-date'>{date}</h5>
        }
    }
    // Skip in Array for Duplication of Date

    // For BreadCrumb and DETAILS URL
    function linkHandler (match) {
        let breadcrum_str = `${match.team.replace(/_/g, ' ')} vs ${match.opp.replace(/_/g, ' ')}`
        dispatch(currentMatches(breadcrum_str))
        let url = `sport=${currentSport}&matchId=${match.match_id}`
        dispatch(currentURL(url))
    }
    // For BreadCrumb and DETAILS URL

    function dataRow() {
        return data.map((match, index) => {
            return (
            <a href={`/app/${currentSport}/${match.match_id}`} className="link-anchor"  key={index} onClick={() => linkHandler(match)}>
                {duplicateDate(match.disp_date)}
                <div className='row-match tablet-view'>
                    <div className="upper-row-match same-row-style">
                        <div className='column-one same-col-style'>
                            <label>Event</label>
                            <p><span className='basic-name'>{match.league}</span></p>
                            <div className='seprate-border'></div>
                            <p><span className='basic-name'>{/* {match.league} */}</span></p>
                        </div>
                        <div className='column-two same-col-style'>
                            <label>Match</label>
                            <p>
                                <img src={`https://Rugby4Cast.b-cdn.net/team_logos/${match.team}.jpg`} alt='...' onError={(event) => event.target.style.display = 'none'}/>
                                {match.team.replace(/_/g, ' ')}
                            </p>
                            <div className='seprate-border'></div>
                            <p>
                                <img src={`https://Rugby4Cast.b-cdn.net/team_logos/${match.opp}.jpg`} alt='...' onError={(event) => event.target.style.display = 'none'}/>
                                {match.opp.replace(/_/g, ' ')}
                            </p>
                        </div>
                        <div className='column-three same-col-style'>
                            <label>Win %</label>
                            <p>{match.pred_perc}%</p>
                            <div className='seprate-border'></div>
                            <p>{match.pred_perc_opp}%</p>
                        </div>
                        {match.pred_score > 0 ? (
                            <div className='column-four same-col-style'>
                                <label>Prediction</label>
                                <p>{match.pred_score}</p>
                                <div className='seprate-border'></div>
                                <p>{match.pred_score_opp}</p>
                            </div>
                        ): null}
                        <div className='break-col'></div>
                        <div className='column-five same-col-style'>
                            <label>Form</label>
                            <ul className='scoreboard-ul'>
                                {match.form_1?.length ? match.form_1.map((form, index) => {
                                    return <li key={index} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
                                }): null}
                            </ul>
                            <div className='seprate-border'></div>
                            <ul className='scoreboard-ul'>
                                {match.form_1_opp?.length ? match.form_1_opp.map((form, index) => {
                                    return <li key={index} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
                                }): null}
                            </ul>
                        </div>
                        <div className='column-six same-col-style'>
                            <label>best odds</label>
                            <p>
                                {match.odds} at <img src={`https://Rugby4Cast.b-cdn.net/bookies/${match.bookie}.jpg`} alt='...'  onError={(event) => event.target.style.display = 'none'}/>
                            </p>
                            <div className='seprate-border'></div>
                            <p>
                                {match.odds_opp} at <img src={`https://Rugby4Cast.b-cdn.net/bookies/${match.bookie_opp}.jpg`}  alt='...'  onError={(event) => event.target.style.display = 'none'}/>
                            </p>
                        </div>
                        <div className='icon-navigate'>
                            <span>More</span>
                            <img src={arrowRight} alt='...' className='arrow-right-ico'/>
                        </div>
                    </div>
                </div>
            </a>
            )
        })
    }
    return (
        <>
            {loader ? <div className='loader'><img src={loaderGif} alt='...'/></div>: dataRow()}
        </>
    )
}

export default SpecificEventView