import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as apiMovies from 'service/apiMovies';
import {
  List,
  Item,
  Image,
  CardTitle,
  Character,
  NoCast,
} from '../Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');

    async function getCast() {
      try {
        const { cast } = await apiMovies.getCastById(movieId);
        setCast(cast);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }
    getCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <>
      {status === 'rejected' && <h3>{error}</h3>}
      <List>
        {status === 'resolved' &&
          cast.map(({ name, profile_path, id, character }) => (
            <Item key={id}>
              {profile_path !== null && (
                <Image
                  src={`http://image.tmdb.org/t/p/w780/${profile_path}`}
                  alt="foto"
                />
              )}
              <CardTitle>{name}</CardTitle>
              <Character>Character: {character}</Character>
            </Item>
          ))}
      </List>
      {status === 'resolved' && cast.length === 0 && (
        <NoCast>We dont have any cast for this movie</NoCast>
      )}
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
  error: PropTypes.any,
  status: PropTypes.string,
};

export default Cast;
