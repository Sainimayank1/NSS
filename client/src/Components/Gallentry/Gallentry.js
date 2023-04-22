import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import "./Gallentry.css"
import Loading from '../Loader/Loading';

function Gallentry() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const {awards} = useSelector(state => state.awardsReducer)
    const {loading } = useSelector(state => state.authReducer);

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
                dispatch({type:"SET_ALL_AWARDS" , payload:response.data.data})
                dispatch({ type: "CLOSE_LOADER" })
            } catch (error) {
                console.log(error)
                dispatch({ type: "CLOSE_LOADER" })
            }
        }
        doIt();
    }, [id])
    return (
        <div className='gallentry-main'>
            {
                loading ? <Loading/> :
                awards.map((element)=>
                {
                   return  <div>
                    Hello Mayank these side 
                     <div>{element.userName}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Gallentry