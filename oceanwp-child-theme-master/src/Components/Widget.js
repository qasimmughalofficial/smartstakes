import React, { useEffect, useState } from 'react';
import loaderGif from '../assets/stakes.gif'
import stayTuned from '../assets/stayTuned.png'

function Widget(props) {
    const { sports } = props;
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)


	function progressBar(valOne, valTwo){
		return ((valOne*2)*100) / (valTwo*2);
	}


    useEffect(() => {
        setLoader(true)
        let temp_url = 'https://07683plylj.execute-api.us-east-2.amazonaws.com/prod';
        let temp_complete_url = `${temp_url}/bettingMatchList?sport=${sports}`;
        fetch(temp_complete_url)
            .then((response) => response.text())
            .then((data) => {
                setLoader(false)
                if (data !== '') {
                    setData((JSON.parse(data).data).reverse());
                }
                else {
                    setData([])
                }
            })
            .catch((e) => console.log(e));
    },[sports])


    return (
        <div className='widget-wrapper'>
            <div className={`widget-content ${data.length ? '':'stay-tuned'}`}>
                { loader ?  <div className='loader'><img src={loaderGif} alt='...'/></div> : data.length ? (
                    <>
                        <h4 className='name-sports'>{sports}</h4>
                        <h5 className='top-match'>Top match</h5>
                        <div className='names-widget-row'>
                            <p>
                                <img src={`https://Rugby4Cast.b-cdn.net/team_logos/${data[0]?.team}.jpg`} alt='...' onError={(event) => event.target.style.display = 'none'}/>
                                <span className='team-names'>{data[0]?.team}</span>
                                <span className='widget-vs'>vs.</span>
                                <span className='team-names'>{data[0]?.opp}</span>
                                <img src={`https://Rugby4Cast.b-cdn.net/team_logos/${data[0]?.opp}.jpg`} alt='...' onError={(event) => event.target.style.display = 'none'}/>
                            </p>
                        </div>
                        <div className='predict-widget-row'>
                            <p>
                                <span className={data[0]?.pred_perc > data[0]?.pred_perc_opp ? 'success':'danger'}>
                                    {data[0]?.pred_perc}%
                                    <div className={`widget-win-bar ${data[0]?.pred_perc > data[0]?.pred_perc_opp ? 'success-detail-bar':'danger-detail-bar'}`} style={{left:'5px'}}></div>
                                </span>
                                <span>Win%</span>
                                <span className={data[0]?.pred_perc < data[0]?.pred_perc_opp ? 'success':'danger'}>
                                    {data[0]?.pred_perc_opp}%
                                    <div className={`widget-win-bar ${data[0]?.pred_perc < data[0]?.pred_perc_opp ? 'success-detail-bar':'danger-detail-bar'}`} style={{right:'5px'}}></div>
                                </span>
                            </p>
                        </div>
                        {data[0]?.form_1.length > 0 ? (
                            <div className='widget-scores'>
                                <div className='stats-box'>
                                    <div className='stats-team-one stats-team-common'>
                                        <h6><span>{data[0]?.form_1_num}</span>/{data[0]?.form_1_denom}</h6>
                                        <div className='form-progress-bar form-bar-left'>
                                            <span
                                                className={`default-bg-pb ${data[0]?.form_1_num > data[0]?.form_1_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
                                                style={{width: `${progressBar(data[0]?.form_1_num, data[0]?.form_1_denom)}%`}}
                                            ></span>
                                        </div>
                                        <div className='form-total-matches'>
                                            {data[0]?.form_1_name}
                                        </div>
                                    </div>
                                    <div className='stats-team-two stats-team-common'>
                                        <div className='form-progress-bar form-bar-right'>
                                            <span
                                                className={`default-bg-pb ${data[0]?.form_1_num < data[0]?.form_1_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
                                                style={{width: `${progressBar(data[0]?.form_1_num_opp, data[0]?.form_1_denom_opp)}%`}}
                                            ></span>
                                        </div>
                                        <h6><span>{data[0]?.form_1_num_opp}</span>/{data[0]?.form_1_denom_opp}</h6>
                                    </div>
                                </div>
                            </div>
                        ) : null }
                        <div className='widget-odds'>
                            <span className='ods-score'>{data[0]?.odds}</span>
                            <img src={`https://Rugby4Cast.b-cdn.net/bookies/${data[0]?.bookie}.jpg`} alt='...'  onError={(event) => event.target.style.display = 'none'}/>
                            <span className='ods-title'>Best Odds</span>
                            <img src={`https://Rugby4Cast.b-cdn.net/bookies/${data[0]?.bookie_opp}.jpg`}  alt='...'  onError={(event) => event.target.style.display = 'none'}/>
                            <span className='ods-op-score'>{data[0]?.odds_opp}</span>
                        </div>
                        <p className='widget-others'>There are <span>{data.length}</span> other matches.</p>
                        <div className='view-all'>
                            <a href={`/app/${sports}`}>View All Matches</a>
                        </div>
                    </>
                ) : <><h4>{sports}</h4><h6>No matches right now... stay tuned</h6><a>View All Matches</a></>}
            </div>
        </div>
    )
}

export default Widget