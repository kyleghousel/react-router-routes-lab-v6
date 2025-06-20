import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return <h1>Oops! Looks like something went wrong.</h1>;
}

export default ErrorPage
