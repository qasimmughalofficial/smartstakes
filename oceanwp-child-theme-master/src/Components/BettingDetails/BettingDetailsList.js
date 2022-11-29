import React from 'react'
import BestOdds from './BestOdds';
import { useEffect } from 'react';
import RankingTable from './RankingTable';

function BettingDetailsList(props) {
	const { data, sportURL } = props;
	// Creating Random Number for List
	const random = (index) => {
        return Math.floor((Math.random() * 9999999) + (Math.random() * 9999) * index)
    }
	function progressBar(valOne, valTwo){
		return ((valOne*2)*100) / (valTwo*2);
	}
	function viewDetails() {
        return data.map((details, index) => {
			return (
				<React.Fragment key={random(index)}>
					<div className='match-details-wrapper'>
						<div className='match-details-content'>
							<div className='match-detail-header'>
								<div className='teams-percentage'>
									<div className='team-one common-navbar-teams'>
										<p style={{marginRight: '80px'}}>
											{details.pred_perc}%
											<small>Win Chance</small>
										</p>
										<h4>
											<img src={`https://Rugby4Cast.b-cdn.net/team_logos/${details.team}.jpg` } alt='...' onError={(event) => event.target.style.display = 'none'}/>
											<span>{details.team.replace(/_/g, ' ')}</span>
											<div className={`default-detail-bar ${details.pred_perc > details.pred_perc_opp ? 'success-detail-bar':'danger-detail-bar'}`}></div>
										</h4>
									</div>
									<span className='vs-text'>vs.</span>
									<div className='team-two common-navbar-teams'>
										<h4>
											<span>{details.opp.replace(/_/g, ' ')}</span>
											<img src={`https://Rugby4Cast.b-cdn.net/team_logos/${details.opp}.jpg`} alt='...' onError={(event) => event.target.style.display = 'none'}/>
											<div className={`default-detail-bar ${details.pred_perc < details.pred_perc_opp ? 'success-detail-bar':'danger-detail-bar'}`}></div>
										</h4>
										<p style={{marginLeft: '80px'}}>
											{details.pred_perc_opp}%
											<small>Win Chance</small>
										</p>
									</div>
								</div>
							</div>
							<div className='match-detail-body'>
								<div className='title-heading border-top-heading'>
									<h6>Smart Stats</h6>
								</div>
								<div className='stats-content'>
									{details.form_1?.length ? (
										<div className='stats-box'>
											<div className='stats-team-one stats-team-common'>
												<ul className='scoreboard-ul'>
													{details.form_1.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													})}
												</ul>
												<h6><span>{details.form_1_num}</span>/{details.form_1_denom}</h6>
												<div className='form-progress-bar form-bar-left'>
													<span
														className={`default-bg-pb ${details.form_1_num > details.form_1_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_1_num, details.form_1_denom)}%`}}
													></span>
												</div>
												<div className='form-total-matches'>
													{details.form_1_name}
												</div>
											</div>
											<div className='stats-team-two stats-team-common'>
												<div className='form-progress-bar form-bar-right'>
													<span
														className={`default-bg-pb ${details.form_1_num < details.form_1_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_1_num_opp, details.form_1_denom_opp)}%`}}
													></span>
												</div>
												<h6><span>{details.form_1_num_opp}</span>/{details.form_1_denom_opp}</h6>
												<ul className='scoreboard-ul'>
													{details.form_1_opp?.length? details.form_1_opp.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													}):null}
												</ul>
											</div>
										</div>
									) : <h2 className='not-found-detail'>No data found!</h2> }
									{details.form_2?.length ? (
										<div className='stats-box'>
											<div className='stats-team-one stats-team-common'>
												<ul className='scoreboard-ul'>
													{details.form_2.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													})}
												</ul>
												<h6><span>{details.form_2_num}</span>/{details.form_2_denom}</h6>
												<div className='form-progress-bar form-bar-left'>
													<span
														className={`default-bg-pb ${details.form_2_num > details.form_2_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_2_num, details.form_2_denom)}%`}}
													></span>
												</div>
												<div className='form-total-matches'>
													{details.form_2_name}
												</div>
											</div>
											<div className='stats-team-two stats-team-common'>
												<div className='form-progress-bar form-bar-right'>
													<span
														className={`default-bg-pb ${details.form_2_num < details.form_2_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_2_num_opp, details.form_2_denom_opp)}%`}}
													></span>
												</div>
												<h6><span>{details.form_2_num_opp}</span>/{details.form_2_denom_opp}</h6>
												<ul className='scoreboard-ul'>
													{details.form_2_opp?.length? details.form_2_opp.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													}):null}
												</ul>
											</div>
										</div>
									) : null }
									{details.form_3?.length ? (
										<div className='stats-box'>
											<div className='stats-team-one stats-team-common'>
												<ul className='scoreboard-ul'>
													{details.form_3.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													})}
												</ul>
												<h6><span>{details.form_3_num}</span>/{details.form_3_denom}</h6>
												<div className='form-progress-bar form-bar-left'>
													<span
														className={`default-bg-pb ${details.form_3_num > details.form_3_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_3_num, details.form_3_denom)}%`}}
													></span>
												</div>
												<div className='form-total-matches'>
													{details.form_3_name}
												</div>
											</div>
											<div className='stats-team-two stats-team-common'>
												<div className='form-progress-bar form-bar-right'>
													<span
														className={`default-bg-pb ${details.form_3_num < details.form_3_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_3_num_opp, details.form_3_denom_opp)}%`}}
													></span>
												</div>
												<h6><span>{details.form_3_num_opp}</span>/{details.form_3_denom_opp}</h6>
												<ul className='scoreboard-ul'>
													{details.form_3_opp?.length? details.form_3_opp.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													}):null}
												</ul>
											</div>
										</div>
									) : null }
									{details.form_4?.length ? (
										<div className='stats-box'>
											<div className='stats-team-one stats-team-common'>
												<ul className='scoreboard-ul'>
													{details.form_4.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													})}
												</ul>
												<h6><span>{details.form_4_num}</span>/{details.form_4_denom}</h6>
												<div className='form-progress-bar form-bar-left'>
													<span
														className={`default-bg-pb ${details.form_4_num > details.form_4_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_4_num, details.form_4_denom)}%`}}
													></span>
												</div>
												<div className='form-total-matches'>
													{details.form_4_name}
												</div>
											</div>
											<div className='stats-team-two stats-team-common'>
												<div className='form-progress-bar form-bar-right'>
													<span
														className={`default-bg-pb ${details.form_4_num < details.form_4_num_opp ? 'success-bg-pb':'danger-bg-pb'}`}
														style={{width: `${progressBar(details.form_4_num_opp, details.form_4_denom_opp)}%`}}
													></span>
												</div>
												<h6><span>{details.form_4_num_opp}</span>/{details.form_4_denom_opp}</h6>
												<ul className='scoreboard-ul'>
													{details.form_4_opp?.length? details.form_4_opp.map((form, index) => {
														return <li key={random(index)} className={form === 'L'?'lose-li':null}><span>{form}</span></li>
													}):null}
												</ul>
											</div>
										</div>
									): null }
								</div>
								<div className='title-heading'>
									<h6>Best Odds</h6>
								</div>
								<div className='odd-boxes'>
									{details.all_bookies?.length ? ( 
										<BestOdds bookie_data={details.all_bookies} bookie_opp_data={details.all_bookies_opp}/>
									): <h2 className='not-found-detail'>No data found!</h2> }
								</div>
								{details.players?.length ? ( 
									<>
										<div className='title-heading'>
											<h6>Squads</h6>
										</div>
										<div className='squad-lists'>
											<div className='squad-content'>
												{details.players.map((player, index) => {
													return (
														<h4 key={random(index)}>
															<span className='squad-player'>{player.name}</span>
															{/* <span>{player.jersey}</span> */}
															<span className='sperate-squad-line'></span>
															<span className='squad-opp'>{player.opp_name}</span>
														</h4>
													)
												})}
											</div>
										</div>
									</>
								): null }
								<div className='title-heading'>
									<h6>Standings</h6>
								</div>
								<div className='standing-boxes'>
									{details.table_html?.length ? ( <div className='standing-wrapper' dangerouslySetInnerHTML={{__html: details.table_html}}></div>) : <h2 className='not-found-detail'>No data found!</h2> }
								</div>
								<div className='title-heading'>
									<h6>Rankings</h6>
								</div>
								<div className='ranking-boxes'>
									{details.rank_points_team ? (<RankingTable data={details}/>) : <h2 className='not-found-detail'>No data found!</h2> }
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)
		})
	}
	useEffect(() => {
        window.scrollTo(0, 0)
    },[])

	return (
		<>
			{viewDetails()}
		</>
	)
}

export default BettingDetailsList