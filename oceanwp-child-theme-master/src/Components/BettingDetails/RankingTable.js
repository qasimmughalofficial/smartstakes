import React from 'react'

function RankingTable(props) {
    const {data} = props
    return (
        <div>
            <table class="standings table">
                <thead>
                    <tr>
                        <th colspan="3">Rankings</th>
                        <th colspan="2">Change</th>
                        <th colspan="2">ratings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="subhead">
                        <td>Rank</td>
                        <td>Team</td>
                        <td>Points</td>
                        <td>Rank Change</td>
                        <td>Points Change</td>
                        <td>Att</td>
                        <td>Def</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{data.team}</td>
                        <td>{data.rank_points_team}</td>
                        <td>{data.rank_change_team}</td>
                        <td>{data.rank_points_change_team}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{data.opp}</td>
                        <td>{data.rank_points_opp}</td>
                        <td>{data.rank_change_opp}</td>
                        <td>{data.rank_points_change_opp}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RankingTable