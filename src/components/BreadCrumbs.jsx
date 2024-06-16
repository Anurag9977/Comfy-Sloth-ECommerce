import { Link } from "react-router-dom";

const BreadCrumbs = ({ firstLink, secondLink }) => {
  return (
    <div className="bg-base-300">
      <div className="breadcrumbs align-section-center h-[4.5rem] flex items-center">
        <ul className="font-heading capitalize font-semibold text-sm md:text-base tracking-wider">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          {secondLink ? (
            <>
              <li>
                <Link to={`/${firstLink}`} className="hover:text-primary">
                  {firstLink}
                </Link>
              </li>
              <li>{secondLink}</li>
            </>
          ) : (
            <li>{firstLink}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default BreadCrumbs;
