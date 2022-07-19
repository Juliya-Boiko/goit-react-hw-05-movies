import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFullInfo } from 'API/getFullInfo';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    getFullInfo(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <div>
      {movieInfo && (
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt=""
            width="100px"
          />
          <p>{movieInfo.title}</p>
          <p>Overview:</p>
          <p>{movieInfo.overview}</p>
          <p>Addictional information:</p>
          <ul>
            <li>
              <Link to="credits">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};
