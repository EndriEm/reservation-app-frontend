import { Link, useNavigate } from "react-router-dom";
import { BusinessOwner, Client } from "../types";

type Props = {
  user: Client | BusinessOwner | null;
  setUser: React.Dispatch<React.SetStateAction<Client | BusinessOwner | null>>;
};

const TopNav: React.FC<Props> = ({ user, setUser }) => {
  const navigate = useNavigate();

  const isLoggedIn = user !== null;

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  const logout = () => {
    signOut();
    navigate("/home");
  };

  return (
    <div className="topNavBar">
      <div className="logo">
        <img
          className="logoImg"
          src="../src/assets/img/logo.gif"
          alt=""
          onClick={() => navigate("/home")}
        />
        <h1 className="logoText">BookingOlogy</h1>
      </div>
      {isLoggedIn ? (
        <button className="nav__button" onClick={logout}>
          Log Out
        </button>
      ) : (
        <div className="logout">
          <Link to="/sign-in-business">Business</Link> <span> OR </span>{" "}
          <Link to="/sign-in-client">Client</Link>
        </div>
      )}
    </div>
  );
};

export default TopNav;
