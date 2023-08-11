import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responses } from 'services/api';
import { useFetchMovies } from 'hooks/fetchApi';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, DivSwaiper, P } from './Cast.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { NoPoster } from 'pages/MovieDetails/MovieDetails.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const { data, fetchApi } = useFetchMovies();

  useEffect(() => {
    if (!movieId) return;
    fetchApi(responses.fetchMovieByCast(movieId));
  }, [fetchApi, movieId]);
  const dataCast = data?.cast;

  return (
    <div>
      {!!dataCast&& dataCast.length > 0 ? (
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dataCast.map(cast => (
            <SwiperSlide key={cast.id}>
              <DivSwaiper>
                {cast.profile_path ? (
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.name}
                  />
                ) : (
                  <NoPoster />
                )}
                <h3>{cast.name}</h3>
                <P>Character: {cast.character}</P>
              </DivSwaiper>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h2>We don't have any cast of this movie 🤔</h2>
      )}
    </div>
  );
};

Cast.propTypes = {
  dataCast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
 fetchApi: PropTypes.func,
};
