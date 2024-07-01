import "./ShoutoutList.css";

import Shoutout from "../models/Shoutout";
import ShoutoutRow from "./ShoutoutRow";
import { Link } from "react-router-dom";

interface Props {
  shoutouts: Shoutout[];
  toName: string | undefined;
  onDelete: (id: string) => void;
}

const ShoutoutList = ({ shoutouts, toName, onDelete }: Props) => {
  return (
    <div className="ShoutoutList">
      <h2>{toName ? `Shoutouts to ${toName}` : "All Shoutouts"}</h2>
      {toName && <Link to="/">Back to all Shoutouts</Link>}
      <ul>
        {shoutouts
          .slice(0)
          .reverse()
          .map((so) => (
            <ShoutoutRow
              key={so._id}
              shoutout={so}
              onDelete={() => onDelete(so._id!)}
            />
          ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
