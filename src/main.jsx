import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import AllTouristSpot from "./Components/AllTouristSpot/AllTouristSpot.jsx";
import AddTouristSpot from "./Components/AddTouristSpot/AddTouristSpot.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import ViewSpot from "./Components/ViewSpot/ViewSpot.jsx";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes.jsx";
import MyList from "./Components/MyList/MyList.jsx";
import UpdateSpot from "./Components/UpdateSpot/UpdateSpot.jsx";
import CountryDetails from "./Components/CountryDetails/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://nomad-nest-server.vercel.app/spots"),
      },
      {
        path: "/allSpots",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("https://nomad-nest-server.vercel.app/spots"),
      },
      {
        path: "/addSpots",
        element: (
          <PrivateRoutes>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/viewSpot/:id",
        element: (<PrivateRoutes><ViewSpot></ViewSpot></PrivateRoutes>  
        ),
        loader: ({ params }) =>
          fetch(`https://nomad-nest-server.vercel.app/spots/${params.id}`),
      },
      {
        path: "/updateSpot/:id",
        element: (
          <PrivateRoutes>
            <UpdateSpot></UpdateSpot>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://nomad-nest-server.vercel.app/spots/${params.id}`),
      },
      {
        path: "/country/:id",
        element: <CountryDetails></CountryDetails>,
        loader: ({ params }) =>
          fetch(`https://nomad-nest-server.vercel.app/country/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
