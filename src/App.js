import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Jobs from "./components/Jobs/Jobs";

import Root from "./routes/root";

function App({ setActive }) {
  const router = createBrowserRouter([
    {
      path: "/ost-blog",
      element: <Root />,
      children: [
        {
          path: "/ost-blog/",
          element: <Home />,
        },
        {
          path: "/ost-blog/news-feed/",
          element: <NewsFeed />,
        },
        {
          path: "/ost-blog/upcoming-events/",
          element: <UpcomingEvents />,
        },
        {
          path: "/ost-blog/jobs/",
          element: <Jobs />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
