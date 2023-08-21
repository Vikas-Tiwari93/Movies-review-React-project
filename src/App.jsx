import { Provider } from "react-redux";
import "./App.css";

import store from "./redux/store";
import "./components/styles/navbar.css";
import "./components/styles/cards.style.css";
import "./components/styles/pagination.style.css";
import "./Pages/Styles/homapage.style.css";
import "./Pages/Styles/search.style.css";

import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Homebody from "./Pages/Homepage/Homebody";
import TopratedBody from "./Pages/Top-ratedpage/TopratedBody";
import UpcommingBody from "./Pages/Upcomming-page/UpcommingBody";
import DteailBody from "./Pages/Details-page/DteailBody";
import SearchBody from "./Pages/Searched-page/SearchBody";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homebody />,
    errorElement: <p> pagenot found found</p>,
  },
  { path: "/toprated", element: <TopratedBody /> },
  { path: "/upcomming", element: <UpcommingBody /> },
  { path: "/:id", element: <DteailBody /> },
  { path: "/search", element: <SearchBody /> },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
