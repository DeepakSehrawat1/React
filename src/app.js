import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./Help";
import Contact from "./Contact";
import Error from "./Error";
import RestInfo from "./RestInfo";
import KhanaClass from "./KhanaClass";

const AppContent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContent />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurents/:id",
        element: <RestInfo />,
      },
      {
        path: "about",
        element: <KhanaClass name={"deraj"} location={"maliyawas"} />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={AppRouter} />);
