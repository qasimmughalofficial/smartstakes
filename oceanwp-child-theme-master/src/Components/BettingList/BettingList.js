import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import BettingListView from './BettingListView';
import selectStyles from '../../styles.js';
import filterIco from '../../assets/filter.png';
import { useDispatch, useSelector } from 'react-redux'
import { currentMatches, currentSports } from '../../redux/commonAction'
import { useNavigate, useParams } from 'react-router-dom'


function BettingList() {
    // States
    const [data, setData] = useState([]);
    const [currentSport, setCurrentSport] = useState('');
    const [loader, setLoader] = useState(false)
    // const [filterHide, setFilterHide] = useState(false)
    const [sportOptions, setSportOptions] = useState([
        { value: 'rugby', label: 'Rugby' },
        { value: 'tennis', label: 'Tennis' },
        { value: 'football', label: 'Football' },
        { value: 'darts', label: 'Darts' },
    ]);
    const [countryOptions, setCountryOptions] = useState([
        { value: 'all', label: 'All Countries' },
    ]);
    const [leaugeOptions, setLeaugeOptions] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const dispatch = useDispatch()
    const matchDetail = useSelector(state => state.matchDetail)
    const navigate = useNavigate()
    // For fetching the Url Bulid-in function useParams() react-router-dom
    const { sportURL } = useParams()
    // For fetching the Url Bulid-in function useParams() react-router-dom

    // Event Handling
    const sportChange = (event) => {
        let sport = event.value;
        setCurrentSport(sport);
        navigate(`/app/${sport}`)
    }
    const leaugeChange = (event) => {
        // const filterData = data.filter(filterLeauge => filterLeauge.league === event.value)
        // console.log(filterData);
        setFilterData(data.filter(filterLeauge => filterLeauge.league === event.value));
    }

    const changeFilterDisplay = () => {
        setFilterHide(!filterHide);
    }

    // Use Effect
    useEffect(() => {
        // console.log(data)
        // let uniqueCountries = [];
        let uniqueLeagues = [];
        data.map((match) => {
            // uniqueCountries = [...uniqueCountries, { label: match.country, value: match.country }];
            uniqueLeagues = [...uniqueLeagues, match.league];
        });
        // let countries = [{ label: 'All Countries', value: undefined }];
        let leagues = [{ label: 'All Leagues', value: undefined }];
        // [...new Set(uniqueCountries.map((c) => c.value))].map((country) => {
        //     countries = [...countries, { label: country, value: country }];
        // });
        [...new Set(uniqueLeagues.map((l) => l))].map((league) => {
            leagues = [...leagues, { label: league, value: league }];
        });
        setLeaugeOptions(leagues);
    }, [data]);

    useEffect(() => {
        // if(window.innerWidth < '576'){
        //     setFilterHide(false)
        // }
        if (sportURL) {
            setCurrentSport(sportURL)
        }
        dispatch(currentSports(currentSport))
        if (matchDetail) {
            dispatch(currentMatches(''))
        }
    },[currentSport])

    useEffect(() => {
        setLoader(true)
        let temp_url = 'https://07683plylj.execute-api.us-east-2.amazonaws.com/prod';
        let temp_complete_url = `${temp_url}/bettingMatchList?sport=${sportURL}`;
        fetch(temp_complete_url)
        .then((response) => response.text())
        .then((data) => {
            setLoader(false)
            if (data !== '') {
                setData(JSON.parse(data).data);
                setFilterData([])
            } else {
                setData([]);
                setFilterData([])
            }
        })
        .catch((e) => console.log(e)); // eslint-disable-line no-console
    },[sportURL])

    

    return (
        <>
            <div className='filters-wrapper'>
                {/* {filterHide ? <h2 className='filter-label'>Filters</h2> : (
                    <> */}
                        <div className='sport-select same-filter-design'>
                            <label>Sport</label>
                            <Select
                                options={sportOptions}
                                onChange={sportChange}
                                styles={selectStyles}
                                placeholder="Select Sport"
                                isSearchable={false}
                                defaultValue={sportOptions.map(val => val.value === sportURL ? val : null)}
                            />
                        </div>
                        {/* <div className='country-select same-filter-design'>
                            <label>Country</label>
                            <Select
                                options={countryOptions}
                                isDisabled={true}
                                defaultValue={countryOptions[0]}
                                styles={selectStyles}
                            />
                        </div> */}
                        <div className='league-select same-filter-design'>
                            <label>league</label>
                            <Select
                                options={leaugeOptions}
                                onChange={leaugeChange}
                                styles={selectStyles}
                                isSearchable={false}
                                placeholder="Select League"
                            />
                        </div>
                    {/* </>
                )} */}
                <img src={filterIco} alt="..." className='filter-bar-ico' onClick={changeFilterDisplay}/>
            </div>
            <div className='betting-list-wrapper'>
                {data.length ? filterData.length ? <BettingListView data={filterData} currentSport={currentSport} loader={loader}/> :
                    <div className='content-match'><BettingListView data={data} currentSport={currentSport} loader={loader}/></div> : 
                    currentSport === '' ? <div className='data-not-found'><h1>Select Sport...</h1></div> : <div className='data-not-found'><h1>No matches right now... stay tuned</h1></div>
                }
            </div>
        </>
    )
}

export default BettingList