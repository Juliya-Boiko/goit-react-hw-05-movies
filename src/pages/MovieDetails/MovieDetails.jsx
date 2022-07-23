import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getFullInfo } from 'api/getFullInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink, BackLinkIcon } from 'components/common/BackLink.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const location = useLocation().state.from;
  const backRef = location.state?.from ?? '/';

  useEffect(() => {
    getFullInfo(movieId).then(result => {
      setMovieInfo(result.data);
    });
  }, [movieId]);

  return (
    <div>
      <BackLink to={backRef}>
        <BackLinkIcon />
        Back to movies
      </BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <p>Addictional information:</p>
          <ul>
            <li>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
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
