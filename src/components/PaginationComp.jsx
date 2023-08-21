import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Cardone from "./Card-one";
import { Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";

export default function PaginationComp({ fetchreducer, list, isLoading }) {
  const [page, setpage] = useState(1);
  const [pageIncrease, setPageIncrease] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchreducer(String(page)));
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }, [page]);

  const changepagefn = (i) => {
    if (page !== i + 1) {
      setpage(i + 1);
    }
  };
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
      {isLoading ? (
        <div className="spinner">
          <SpinnerDotted size="150" thickness="150" сolor="red" />
        </div>
      ) : (
        <div>
          <div className="cardRoot">
            {list.map((elm) => {
              return (
                <Link key={elm.id} to={`/${elm.id}`}>
                  <Cardone
                    imgId={`${elm.backdrop_path}`}
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
