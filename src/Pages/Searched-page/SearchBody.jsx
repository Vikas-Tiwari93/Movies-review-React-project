import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchfetch } from "../../redux/SearchSlice";
import { useLocation, Link } from "react-router-dom";
import Cardone from "../../components/Card-one";
import { SpinnerDotted } from "spinners-react";

export default function SearchBody() {
  const [page, setpage] = useState(1);
  const [pageIncrease, setPageIncrease] = useState(0);

  const isLoading = useSelector((state) => {
    return state.SearchSlice.isLoading;
  });

  useEffect(() => {
    dispatch(searchfetch({ searchparam: searchparam, pageno: String(page) }));
  }, [page]);

  const changepagefn = (i) => {
    if (page !== i + 1) {
      setpage(i + 1);
    }
  };

  const dispatch = useDispatch();
  const location = useLocation();
  let searchlist = useSelector((state) => {
    return state.SearchSlice.SearchList;
  });
  const searchparam = location.search.split("=")[1];

  useEffect(() => {
    searchlist.length === 0
      ? dispatch(searchfetch({ searchparam: searchparam, pageno: 1 }))
      : null;
  }, []);
  const decreasebtn = () => {
    if (page > 6) {
      setPageIncrease(pageIncrease - 6);
    }
  };
  const increasebtn = () => {
    if (page < 54) {
      setPageIncrease(pageIncrease + 6);
    }
  };

  return (
    <div>
      <div className="searched">Searched results :</div>
      {isLoading ? (
        <div className="spinner">
          <SpinnerDotted size="150" thickness="150" сolor="red" />
        </div>
      ) : searchlist.length === 0 ? (
        <div className="noMoviefound">
          {" "}
          Opps!! Can not find a move with this name
        </div>
      ) : (
        <div>
          <div className="cardRoot">
            {searchlist.map((elm) => {
              return (
                <Link key={elm.id} to={`/${elm.id}`}>
                  <Cardone
                    imgId={`${elm.backdrop_path || elm.poster_path}`}
                    name={elm.original_title}
                    ratings={elm.vote_average}
                  />
                </Link>
              );
            })}
          </div>
          <div className="pageno">Page no: {page}</div>
          <div className="pages-button">
            <button onClick={decreasebtn}>Previous</button>
            {[...Array(6)].map((_, i) => {
              return (
                <button key={i} onClick={() => changepagefn(pageIncrease + i)}>
                  {pageIncrease + i + 1}
                </button>
              );
            })}
            <button onClick={increasebtn}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
