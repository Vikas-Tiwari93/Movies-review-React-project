import PaginationComp from "../../components/PaginationComp";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import SearchBody from "../Searched-page/SearchBody";
import { useLocation } from "react-router-dom";
import { isSearchedReducer, popularfetch } from "../../redux/PopularHomeSlice";

export default function Homebody() {
  const dispatch = useDispatch();
  const location = useLocation();
  location.search ? dispatch(isSearchedReducer(true)) : null;
  let isSearched = useSelector((state) => {
    return state.PopularSlice.Searched;
  });
  let selectorlist = useSelector((state) => {
    return state.PopularSlice.PopularList;
  });
  let totalPages = useSelector((state) => {
    return state.PopularSlice.Totalpages;
  });
  let isLoading = useSelector((state) => {
    return state.PopularSlice.isLoading;
  });
  return (
    <div>
      <Navbar pagename={"logo"} />
      {isSearched ? null : (
        <div className="mostpopulartext">Most popular movies</div>
      )}
      {!isSearched ? (
        <PaginationComp
          fetchreducer={popularfetch}
          list={selectorlist}
          isLoading={isLoading}
        />
      ) : (
        <SearchBody />
      )}
    </div>
  );
}
