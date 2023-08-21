import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { searchfetch } from "../redux/SearchSlice";
import { isSearchedReducer } from "../redux/PopularHomeSlice";
export default function Navbar({ pagename }) {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setselected] = useState(pagename);

  const dispatch = useDispatch();

  const searchfn = () => {
    navigate("/");
    dispatch(isSearchedReducer(true));
    dispatch(searchfetch({ searchparam: input, pageno: "1" }));
    searchParams.set("movie", input);
    setSearchParams(searchParams);
  };
  const inputChangefn = (e) => {
    setinput((prev) => {
      prev = e.target.value;
      return prev;
    });
  };
  const stylechangefn = (e) => {
    setselected((prev) => {
      prev = e.target.className;
      return prev;
    });
  };
  console.log(selected);
  return (
    <div className="navroot">
      <Link to="/" onClick={() => dispatch(isSearchedReducer(false))}>
        <div
          className="logo"
          id={selected === "logo" ? "selected" : null}
          onClick={stylechangefn}
        >
          Movie Db
        </div>
      </Link>
      <div className="rightnav">
        <Link to="/">
          <span
            className="popular"
            id={selected === "popular" ? "selected" : null}
            onClick={stylechangefn}
          >
            Popular
          </span>
        </Link>
        <Link to="/toprated">
          <span
            className="toprated"
            id={selected === "toprated" ? "selected" : null}
            onClick={stylechangefn}
          >
            Top Rated
          </span>
        </Link>
        <Link to="/upcomming">
          <span
            className="upcomming"
            id={selected === "upcomming" ? "selected" : null}
            onClick={stylechangefn}
          >
            Up Comming
          </span>
        </Link>
        <span className="searchcomp">
          <input type="text" value={input} onChange={inputChangefn} />
          <button onClick={searchfn}>Search</button>
        </span>
      </div>
    </div>
  );
}
