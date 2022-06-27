import React,{useState} from "react";
import './main-css.css'
import MovieInfo from "./movieQuery";


const api = {
    key:  process.env.REACT_APP_API_KEY,
    url: "http://www.omdbapi.com/"
}

function MainPage() {
const[movieDate, getMovieDate] = useState();
const[movieQuery, getMovieQuery] = useState('marvel');

    const search = city => {
        if(city.key === "Enter"){
            fetch(`${api.url}?s=${movieQuery}&apikey=${api.key}`)
            .then(res => res.json())
            .then(result => {
                getMovieDate(result.Search);
                getMovieQuery('');
                // console.log(result);
        });
    }
}

    return(
        
        <div className="main-page">
            <input 
                type="text"
                className="search-input"
                placeholder="Seaerch your Movie or Series"
                onChange={e => getMovieQuery(e.target.value)}
                value={movieQuery}
                onKeyPress={search}
            />
        <div className="container">
       {/* { console.log(movieDate)} */}

        {(typeof movieDate != 'undefined') ? (
                    <MovieInfo data={movieDate}/>
                ) : (
                    <div></div>
                )}
        </div>
        </div>
    );
}

export default MainPage;