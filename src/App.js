import { useState } from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Shorts from "./components/Shorts";

function App() {
  const [sidebar, setSideBar] = useState(false);
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
          path:"/",
          element:<MainContainer/>
      }, {
        path:"/watch",
        element:<WatchPage/>
      },{
        path:"/shorts",
        element:<Shorts/>
      }
    ]
  }])
  return (
    <Provider store={store}>
      <div className="text-lg ">
     <Head setSideBar={setSideBar} />
        <RouterProvider router={appRouter} />
        
      </div>

    </Provider>
  );
}

export default App;
