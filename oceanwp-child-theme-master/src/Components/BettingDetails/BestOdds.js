import React from 'react'

function BestOdds(props) {
    const {bookie_data, bookie_opp_data} = props
	// Creating Random Number for List
	const random = (index) => {
        return Math.floor((Math.random() * 99999999) + (Math.random() * 99999999) * index)
    } 
    function bookieOdds(){
        return bookie_data.map((bookie, index) => {
            return <h6 key={random(index)}>{parseFloat(bookie.Odds).toFixed(2)} at <a href={bookie.URL} target="_blank"><img src={`https://Rugby4Cast.b-cdn.net/bookies/${bookie.Bookie}.jpg`} alt="..." onError={(event) => event.target.style.display = 'none'}/></a></h6>
        })
    }
    function bookieOppOdds(){
        return bookie_opp_data.map((bookie, index) => {
            return (
                <div className='flex-odds-opps' key={random(index)}>
                    <span className='seprate-lines'></span>
                    <h6>{parseFloat(bookie.Odds).toFixed(2)} at <a href={bookie.URL} target="_blank"><img src={`https://Rugby4Cast.b-cdn.net/bookies/${bookie.Bookie}.jpg`} alt="..." onError={(event) => event.target.style.display = 'none'}/></a></h6>
                </div>
            )
        })
    }
    return (
        <>
            <div className='best-odd-box'>
                <div className='odds-box-content'>
                    <div className='bookie-team-odds bookie-team-common'>
                        {bookieOdds()}
                    </div>
                    <div className='bookie-team-opp-odds bookie-team-common'>
                        {bookieOppOdds()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestOdds