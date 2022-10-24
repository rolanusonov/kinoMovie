import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";

const Detail = () => {
    const [detail,setDetail] = useState([])

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/${3}?api_key=${ApiKey}&language=en-US`)
            .then(({data}) => setDetail(data.results))
    },[])
    console.log(detail)
    return (
        <div>
            {
                detail.map(el =>(

                         <div className="blockPopular">
                            {
                                detail  .map(el => (
                                    <div className='popularDev' key={el.id}>
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                        <h1>{el.title}</h1>
                                    </div>
                                ))
                            }
                        </div>

                ))
            }
        </div>
    );
};

export default Detail;