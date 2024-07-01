import "./ShoutoutRow.css";

import Shoutout from "../models/Shoutout";
import { Link } from "react-router-dom";

interface Props {
  shoutout: Shoutout;
  onDelete?: () => void;
}

const ShoutoutRow = ({ shoutout, onDelete }: Props) => {
  return (
    <li className="ShoutoutRow">
      <div>
        <p className="to">
          Shout out to{" "}
          <Link to={`/user/${encodeURIComponent(shoutout.to)}`}>
            {shoutout.to}
          </Link>
        </p>

        <div className="from-info">
          <p> — from </p>
          {shoutout.userPhoto && (
            <img
              src={shoutout.userPhoto}
              alt={shoutout.from}
              className="user-photo"
            />
          )}
          <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
            {shoutout.from}
          </Link>
        </div>
        {shoutout.shoutoutImage?.includes(".mov") ? (
          <video
            className="shoutout-img"
            src={shoutout.shoutoutImage}
            autoPlay
            controls
            muted
          />
        ) : shoutout.shoutoutImage ? (
          <img
            className="shoutout-img"
            src={shoutout.shoutoutImage}
            alt={shoutout.text}
          />
        ) : (
          <></>
        )}
        <p className="message">"{shoutout.text}"</p>
      </div>
      {onDelete && <i onClick={onDelete} className="fa-solid fa-trash"></i>}
    </li>
  );
};

export default ShoutoutRow;
