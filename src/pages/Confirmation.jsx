import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { search } = useLocation();
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      navigate("/");
      return;
    }
    if (count === 0) {
      navigate("/");
      return;
    }
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <main className="align-section-center my-8 font-content flex flex-col gap-y-4">
      <h1 className="text-3xl md:text-4xl tracking-wider">
        Payment Successful!🎉
      </h1>
      <h2 className="text-xl md:text-2xl tracking-wider">
        Thank you for shopping with us.
      </h2>
      <p className="text-base tracking-wide">
        Redirecting to home in {count}...
      </p>
    </main>
  );
};
export default Confirmation;
