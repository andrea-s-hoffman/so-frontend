import { useContext, useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import { getMyShoutouts } from "../services/shoutoutService";
import ShoutoutRow from "./ShoutoutRow";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const MyShoutoutsRoute = () => {
  const [myShoutouts, setMyShoutouts] = useState<Shoutout[]>([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.displayName) {
      getMyShoutouts(user.displayName).then((res) => {
        setMyShoutouts(res);
      });
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <main className="MyShoutoutsRoute">
      <h2>My Shoutouts</h2>
      <ul>
        {myShoutouts.map((so) => (
          <ShoutoutRow shoutout={so} key={so._id} />
        ))}
      </ul>
    </main>
  );
};

export default MyShoutoutsRoute;
