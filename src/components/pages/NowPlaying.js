import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";

const NowPlaying = () => {
    const [playing, setPlaying] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`)
            .then(({data}) => setPlaying(data.results))
    },[])
    return (
        <div>
            <h1>MURZABEK</h1>
            <div className="blockPopular">
                {
                    playing.map(el => (
                        <div className='popularDev' key={el.id}>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                            <h1>{el.title}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default NowPlaying;