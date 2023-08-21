import Navbar from "../../components/Navbar";
import PaginationComp from "../../components/PaginationComp";
import { topRatedFetch } from "../../redux/topRatedSlice";
import { useSelector } from "react-redux";

export default function TopratedBody() {
  let TopratedList = useSelector((state) => {
    return state.topRatedSlice.topRatedList;
  });

  let isLoading = useSelector((state) => {
    return state.topRatedSlice.isLoading;
  });
  return (
    <div>
      <div>
        <Navbar pagename={"toprated"} />
        <div className="mostpopulartext">Top rated movies</div>
        <PaginationComp
          fetchreducer={topRatedFetch}
          list={TopratedList}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
