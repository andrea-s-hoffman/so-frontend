import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import {
  addNewShoutout,
  deleteAShoutout,
  getAllShoutouts,
} from "../services/shoutoutService";
import ShoutoutList from "./ShoutoutList";
import AddSOForm from "./AddSOForm";
import { useParams } from "react-router-dom";

const HomeView = () => {
  const toName: string | undefined = useParams().toName;
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);

  const updateShoutouts = () => {
    getAllShoutouts(toName).then((res) => {
      setShoutouts(res);
    });
  };

  useEffect(() => {
    updateShoutouts();
  }, [toName]);

  const addSOHandler = (shoutout: Shoutout) => {
    addNewShoutout(shoutout).then(() => {
      updateShoutouts();
    });
  };

  const deleteHandler = (id: string): void => {
    deleteAShoutout(id).then(() => {
      updateShoutouts();
    });
  };

  return (
    <main className="HomeView">
      <AddSOForm onAdd={addSOHandler} toName={toName} />
      <ShoutoutList
        shoutouts={shoutouts}
        toName={toName}
        onDelete={deleteHandler}
      />
    </main>
  );
};

export default HomeView;
