import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { signInWithGoogle, signOutOfGoogle } from "../firebaseConfig";
import UserContext from "../context/UserContext";

const Header = () => {
  const [topFiveRoute, setTopFive] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);
  //   console.log(location);

  // console.log(user);

  useEffect(() => {
    if (location.pathname.includes("whatever")) {
      setTopFive(true);
    } else {
      setTopFive(false);
    }
  }, [location.pathname]);

  return (
    <header className="Header">
      <h1>Shoutouts App</h1>
      {user === null ? (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      ) : (
        <>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
          <Link to="/me">See my shoutouts</Link>
          <button onClick={signOutOfGoogle}>Sign Out</button>
        </>
      )}
      {topFiveRoute ? (
        <Link to="/">See All Shoutouts</Link>
      ) : (
        <Link to="/whatever">See Top 5</Link>
      )}
    </header>
  );
};

export default Header;
