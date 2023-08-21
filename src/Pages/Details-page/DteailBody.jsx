import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { singleMovieFetch } from "../../redux/singleMovieSlice";
import { castDetailFetch } from "../../redux/singleMovieSlice";
import DetailsCard from "../../components/DetailsCard";
import Cardcrew from "../../components/Cardcrew";

export default function DteailBody() {
  const location = useLocation();
  const movieId = location.pathname.substring(1, location.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleMovieFetch(movieId));
    dispatch(castDetailFetch(movieId));
  }, []);

  const moviedetails = useSelector((state) => {
    return state.singleMovieSlice.singleMovieDetailList;
  });
  const castedetails = useSelector((state) => {
    return state.singleMovieSlice.castDetails;
  });

  return (
    <div>
      <Navbar />
      <DetailsCard
        time={moviedetails.runtime}
        rating={moviedetails.vote_average}
        name={moviedetails.original_title}
        postersrc={moviedetails.backdrop_path}
        overview={moviedetails.overview}
        mainimg={moviedetails.poster_path}
        genres={moviedetails.genres || []}
        release={moviedetails.release_date}
      />
      <div className="cardRoot">
        {castedetails.map((elm) => {
          return (
            <Cardcrew
              key={elm.id}
              imgId={`${elm.profile_path}`}
              name={elm.original_name}
              character={elm.character}
            />
          );
        })}
      </div>
    </div>
  );
}
