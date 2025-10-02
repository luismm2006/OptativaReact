const MovieCard = ({title, director, year}) => {
    return (<div>
                <h2>{title}</h2>
                <h2>{director}</h2>
                <h2>{year}</h2>
           </div>);
}

export default MovieCard;