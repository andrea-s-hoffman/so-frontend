import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import Shoutout from "../models/Shoutout";
import "./AddSOForm.css";
import UserContext from "../context/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebaseConfig";

interface Props {
  onAdd: (so: Shoutout) => void;
  toName: string | undefined;
}

const AddSOForm = ({ onAdd, toName }: Props) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { user } = useContext(UserContext);
  // console.log(user?.displayName);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newShoutout: Shoutout = { to, from, text };
    if (user?.photoURL) {
      newShoutout.userPhoto = user.photoURL;
    }
    // checking for files
    const files = fileInputRef.current?.files;
    // console.log(files);
    if (files && files[0]) {
      // getting the image locally:
      const newImage = files[0];
      // send that image to firebase:
      const storageRef = ref(storage, newImage.name);
      // uploadBytes is async
      uploadBytes(storageRef, newImage).then((uploadRes) => {
        // after sending, we have to wait for the firebase url:
        getDownloadURL(uploadRes.ref).then((url) => {
          console.log(url);
          newShoutout.shoutoutImage = url;
          onAdd(newShoutout);
          setTo("");
          setFrom("");
          setText("");
          formRef.current?.reset();
        });
      });
    }
  };

  useEffect(() => {
    if (user) {
      setFrom(user.displayName ?? "");
    } else {
      setFrom("");
    }
  }, [user]);

  useEffect(() => {
    if (toName) {
      setTo(toName);
    } else {
      setTo("");
    }
  }, [toName]);

  return (
    <form className="AddSOForm" onSubmit={submitHandler} ref={formRef}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={user?.displayName ? true : false}
      />
      <label htmlFor="text">Shout Out</label>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="image">Add an image:</label>
      <input type="file" name="image" id="image" ref={fileInputRef} />
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default AddSOForm;
