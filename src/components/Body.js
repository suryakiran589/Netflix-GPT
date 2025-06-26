import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchList from "./WatchList";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/watchlist",
      element:<WatchList />
    }
  ]);
  
  return (
    <div className=" -mb-10 md:-mb-40 ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
