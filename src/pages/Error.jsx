import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="h-dvh flex flex-col justify-center items-center gap-y-4">
      {error.status === 404 ? (
        <>
          <h1 className="font-heading text-8xl md:text-9xl text-error font-bold">
            404
          </h1>
          <h3 className="font-heading text-2xl md:text-4xl font-bold tracking-wider text-warning">
            {error.statusText}
          </h3>
          <p className="font-content text-lg md:text-2xl tracking-wide">
            The page you are looking for was not found.
          </p>
          <Link
            to="/"
            className="my-4 font-content uppercase btn btn-primary rounded-md btn-sm text-sm tracking-widest"
          >
            Back Home
          </Link>
        </>
      ) : (
        <>
          <h1 className="font-heading text-2xl md:text-4xl font-bold tracking-wider">
            Oops! Something went wrong!
          </h1>
          <p className="font-heading text-xl md:text-2xl font-bold tracking-wider">
            Please try again later.
          </p>
          <Link
            to="/"
            className="my-4 font-content uppercase btn btn-primary rounded-md btn-sm text-sm tracking-widest"
          >
            Back Home
          </Link>
        </>
      )}
    </main>
  );
};
export default Error;
