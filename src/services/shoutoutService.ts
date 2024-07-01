import axios from "axios";
import Shoutout from "../models/Shoutout";
import TopFive from "../models/TopFive";

const baseUrl: string =
  import.meta.env.VITE_API_BASE_URL || "BASE URL NOT IMPORTED";

export const getAllShoutouts = (
  to: string | undefined
): Promise<Shoutout[]> => {
  return axios
    .get(`${baseUrl}/shoutouts`, {
      params: {
        to,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getMyShoutouts = (myName: string): Promise<Shoutout[]> => {
  return axios
    .get(`${baseUrl}/shoutouts`, {
      params: {
        me: myName,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getTopFive = (): Promise<TopFive[]> => {
  return axios
    .get(`${baseUrl}/top-five`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const addNewShoutout = (newSO: Shoutout): Promise<Shoutout[]> => {
  return axios
    .post(`${baseUrl}/shoutouts`, newSO)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteAShoutout = (id: string): Promise<void> => {
  return axios
    .delete(`${baseUrl}/shoutouts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
