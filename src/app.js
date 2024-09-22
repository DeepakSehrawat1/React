import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const LazyHelp = React.lazy(() => import("./components/Help"));
const LazyContact = React.lazy(() => import("./components/Contact"));
const LazyRestInfo = React.lazy(() => import("./components/RestInfo"));
const LazyKhanaClass = React.lazy(() => import("./components/KhanaClass"));
const LazyError = React.lazy(() => import("./components/Error"));

const AppContent = () => {
  return (
    <Provider store={appStore}>
      <>
        <HeaderComponent />
        <Outlet />
      </>
    </Provider>
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
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            {" "}
            <LazyHelp />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <LazyContact />
          </Suspense>
        ),
      },
      {
        path: "restaurents/:id",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <LazyRestInfo />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <LazyKhanaClass />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<h1>loading....</h1>}>
        <LazyError />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={AppRouter} />);
