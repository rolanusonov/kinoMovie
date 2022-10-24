import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
import {Link} from "react-router-dom";

const Popular = () => {
    const [popular, setPopular] = useState([])
      useEffect( ()=>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=ru-US&page=1`)
            .then(({data}) => setPopular(data.results))
    },[])


      return (
         <div>
             <h1>Rolan Usonov</h1>
             <div className="blockPopular">
                 {
                     popular.map(el  =>(
                             <div className='popularDev' key={el.id}>
                                      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>

                                  <h1>{el.title}</h1>
                             </div>
                         )
                     )
                 }



             </div>
         </div>
    );
};

export default Popular;