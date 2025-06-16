import { Link, useLocation } from "react-router-dom";
import { NavbarWrapper } from "./Navbar.styles";
// import { useSelector } from "react-redux";
// import { State } from "../../redux/reducers";
import { FaHome, FaStar, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  // const { user } = useSelector((state: State) => state.user);
  const path = useLocation().pathname.split("/")[1];

  const isActive = (navName: string): string => {
    return navName === path ? "active_nav" : "";
  };

  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <NavbarWrapper>
      <div className="nav_left">
        <Link to={"/"}>
          <div className="logoBg">
            <h1 className="logo_text">Ramit Neupane</h1>
          </div>
        </Link>
      </div>

      <div className="nav_right">
        <ul className="nav_list">
          <Link to="/">
            <li className={`${isActive("")}`}>
              <span className="nav_icon">
                <FaHome />
              </span>
              <span className="nav_text">Dashboard</span>
            </li>
          </Link>
          <Link to={"/reviews"}>
            <li className={`${isActive("reviews")}`}>
              <span className="nav_icon">
                <FaStar />
              </span>
              <span className="nav_text">Reviews</span>
            </li>
          </Link>
          <Link to={"/works"}>
            <li className={`${isActive("works")}`}>
              <span className="nav_icon">
                <FaBriefcase />
              </span>
              <span className="nav_text">Works</span>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className={`${isActive("contact")}`}>
              <span className="nav_icon">
                <FaEnvelope />
              </span>
              <span className="nav_text">Contact</span>
            </li>
          </Link>
        </ul>

        {user ? (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "40px",
                  height: "40px",
                },
              },
            }}
          />
        ) : (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openSignIn();
            }}
            style={{
              backgroundColor: "#007bff", // blue background
              color: "#fff", // white text
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            Log in
          </a>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
