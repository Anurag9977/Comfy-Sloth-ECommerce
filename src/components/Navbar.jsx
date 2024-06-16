import { Link, NavLink } from "react-router-dom";
import { navLinksArray } from "../utils/constants";
import { RiShoppingCartLine, RiMenu3Line } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { themes } from "../utils/constants";
import { toggleTheme } from "../features/theme/themeSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { clearCart } from "../features/cart/cartSlice";
const Navbar = () => {
  // AUTH0 LOGIN CODE
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const picture = user?.picture;
  //
  const { theme } = useSelector((store) => store.themeState);
  const { quantity } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();

  //NAV LINKS UPDATE
  let navLinks = [...navLinksArray];
  if (user && isAuthenticated) {
    navLinks = [
      ...navLinksArray,
      { id: 4, name: "checkout", href: "/checkout" },
    ];
  }

  return (
    <nav className="shadow-sm">
      <div className="navbar h-[4.5rem] align-section-center">
        <div className="navbar-start">
          <details className="dropdown lg:hidden">
            <summary className="m-1 btn btn-circle btn-ghost text-xl">
              <RiMenu3Line />
            </summary>
            <ul className="mt-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {navLinks.map((item) => {
                const { id, name, href } = item;
                return (
                  <NavLink
                    key={id}
                    to={href}
                    className="font-heading font-semibold tracking-wide capitalize text-base py-1 px-2 hover:bg-base-200 rounded-xl"
                  >
                    {name}
                  </NavLink>
                );
              })}
            </ul>
          </details>
          <Link
            to="/"
            className="font-logo text-primary text-2xl sm:text-3xl lg:text-4xl tracking-wide"
          >
            Comfy Sloth
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-8 font-heading capitalize text-lg font-semibold tracking-wide">
            {navLinks.map((item) => {
              const { id, name, href } = item;
              return (
                <NavLink
                  key={id}
                  to={href}
                  className={({ isActive }) => {
                    let classes = "py-1 hover:text-primary";
                    return isActive
                      ? (classes += " text-primary border-b-2 border-primary")
                      : classes;
                  }}
                >
                  {name}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
            {/* THEME CONTROLLER */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="flex items-center"
                checked={theme === themes.light}
                onChange={() => dispatch(toggleTheme())}
              />
              {/* sun icon */}
              <FiSun className="swap-off text-xl md:text-2xl" />
              {/* moon icon */}
              <FiMoon className="swap-on text-xl md:text-2xl" />
            </label>

            {/* CART BUTTON */}
            <Link to="/cart" className="indicator">
              <RiShoppingCartLine className="text-xl md:text-2xl font-bold hover:text-primary" />
              <span className="badge badge-primary badge-sm rounded-badge text-base-100 font-heading font-semibold indicator-item">
                {quantity}
              </span>
            </Link>

            {/* LOGIN//LOGOUT BUTTON */}
            {user && isAuthenticated ? (
              <details className="dropdown">
                <summary className="btn rounded-full">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={picture} />
                    </div>
                  </div>
                  <IoMdArrowDropdown />
                </summary>
                <ul className="min-w-32 w-max mt-2 shadow-sm menu menu-sm bg-base-200 dropdown-content z-[1] rounded-box">
                  <li>
                    <button
                      className="btn btn-ghost btn-sm  font-content tracking-wider text-sm md:text-base"
                      onClick={() => {
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        });
                        dispatch(clearCart());
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            ) : (
              <button
                className="link link-hover font-heading tracking-wide font-semibold text-sm md:text-base"
                onClick={() => loginWithRedirect()}
              >
                Login/Register
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
