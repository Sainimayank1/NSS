import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import "./Gallentry.css"
import Loading from '../Loader/Loading';

function Gallentry() {
    const { id } = useParams();
    const [_id, Set_id] = useState(null);
    const [data, setData] = useState([]);
    const [singleVisible, setSingleVisible] = useState(false);
    const dispatch = useDispatch();
    const { awards, awardeeData } = useSelector(state => state.awardsReducer)
    const { loading } = useSelector(state => state.authReducer);

    useEffect(() => {
        const doIt = async () => {
            let link = ""
            if (id == 1)
                link = "http://localhost:5000/award/paramvir"
            else if (id == 2)
                link = "http://localhost:5000/award/mahavir"
            else if (id == 3)
                link = "http://localhost:5000/award/virchakra"
            else if (id == 4)
                link = "http://localhost:5000/award/ashoka"
            else if (id == 5)
                link = "http://localhost:5000/award/kirti"
            else if (id == 6)
                link = "http://localhost:5000/award/shaurya"
            dispatch({ type: "SET_LOADER" })
            try {
                const response = await axios.get(link);
                dispatch({ type: "SET_ALL_AWARDS", payload: response.data.data })
                dispatch({ type: "CLOSE_LOADER" })
            } catch (error) {
                console.log(error)
                dispatch({ type: "CLOSE_LOADER" })
            }
        }
        doIt();
    }, [id])

    useEffect(() => {
        const doIt = async () => {
            let link = ""
            if (id == 1)
                link = "http://localhost:5000/award/paramvirSingle/" + _id
            else if (id == 2)
                link = "http://localhost:5000/award/mahavirSingle/" + _id
            else if (id == 3)
                link = "http://localhost:5000/award/virchakraSingle/" + _id
            else if (id == 4)
                link = "http://localhost:5000/award/ashokaSingle/" + _id
            else if (id == 5)
                link = "http://localhost:5000/award/kirtiSingle/" + _id
            else if (id == 6)
                link = "http://localhost:5000/award/shauryaSingle/" + _id
            try {
                const response = await axios.get(link);
                dispatch({ type: "SET_AWARDEE", payload: response.data.data })
            } catch (error) {
                console.log(error)
            }
        }
        doIt();
    }, [_id])

    return (
            <div className={singleVisible ? 'gallentry-main  overflow' :"gallentry-main"}>
                {
                    loading ? <Loading /> :
                        <div className="awardee-main">
                            {awards.map((element) => {
                                return <div className='awardee-profile'>
                                    <div className='awardee-profile-upper'>
                                        <img className='awardee-profile-img' src={element.img}></img>
                                    </div>
                                    <div className='awardee-profile-down'>
                                        <span className='awardee-name'>{element.userName}</span>
                                        <span className='awardee-award'>{element.award.split('(')[0]}</span>
                                        <div className='awardee-btn' onClick={() => { Set_id(element._id); setSingleVisible(true) }}>View Profile</div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                }
                {
                singleVisible &&
                <div className='main-awardee'>
                    <div className='main-awardee-sub'>
                        <div className='main-awardee-upper' onClick={() => setSingleVisible(false)}>
                            <div className='div1'></div>
                            <div className='div2'></div>
                        </div>
                        <div className='main-awardee-down'>
                            <img src={awardeeData[0].img}></img>
                            <div className='main-awardee-details'>
                                <span>Name: {awardeeData[0].userName}</span>
                                <span>Father Name: {awardeeData[0].fatherName}</span>
                                <span>Resident: {awardeeData[0].resident}</span>
                                <span>Rank: {awardeeData[0].Rank}</span>
                                <span>Award: {awardeeData[0].award}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
    )
}

export default Gallentry