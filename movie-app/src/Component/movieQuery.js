import React from "react";


const MovieInfo = ({data}) => (

        data.map((item,i) =>
            <div key={i} className="item">
                <div> <img alt={item.Titel}
                 src={item.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : item.Poster}>
                </img></div>
                <div>{item.Type}  </div>
                <div className="year">{item.Year}  </div>
                <div>{item.Title} </div>
            </div>
        )

);


export default MovieInfo;