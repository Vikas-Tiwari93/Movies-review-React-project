import Navbar from "../../components/Navbar";
import PaginationComp from "../../components/PaginationComp";
import { upCommingFetch } from "../../redux/upcommingSlice";
import { useSelector } from "react-redux";
export default function UpcommingBody() {
  let upCommingList = useSelector((state) => {
    return state.upcommingSlice.upCommingList;
  });

  let isLoading = useSelector((state) => {
    return state.upcommingSlice.isLoading;
  });
  return (
    <div>
      <Navbar pagename={"upcomming"} />
      <div className="mostpopulartext">Up comming movies</div>
      <PaginationComp
        fetchreducer={upCommingFetch}
        list={upCommingList}
        isLoading={isLoading}
      />
    </div>
  );
}
