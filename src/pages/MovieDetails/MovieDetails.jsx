import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getFullInfo } from 'api/getFullInfo';
import { releaseNormalize, ratingNormalize } from 'utils/utils';
import { Genres } from 'components/Genres/Genres';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  // const location = useLocation().state.from;
  // const backRef = location ? location.pathname + location.query : '';
  // console.log(backRef);

  useEffect(() => {
    getFullInfo(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <div>
      {/* <Link to={backRef}>Back to movies</Link> */}
      {movieInfo && (
        <div>
          <img
            src={
              movieInfo.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }
            alt=""
            width="100px"
          />
          <p>
            {movieInfo.title}
            {'  '}
            <span>{releaseNormalize(movieInfo.release_date)}</span>
          </p>
          <p>
            Rating: <span>{ratingNormalize(movieInfo.vote_average)}</span>
          </p>
          <p>Overview:</p>
          <p>{movieInfo.overview}</p>
          <p>Genres</p>
          {<Genres movieGenres={movieInfo.genres} />}
          <p>Addictional information:</p>
          <ul>
            <li>
              <Link to="credits">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
