import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h1>{error.statusText}</h1>
      <h2>{error.status}</h2>
    </>
  );
};

export default Error;
