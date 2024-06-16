import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="font-heading text-2xl md:text-4xl font-bold tracking-wider">
        Oops! Something went wrong!
      </h1>
      <p className="font-heading text-xl md:text-2xl font-bold tracking-wider">
        Please try again later.
      </p>
    </main>
  );
};
export default ErrorComponent;
