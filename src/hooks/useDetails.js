import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState("");

  const detailApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setPhotos(response.data.photos);
      setName(response.data.name);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    detailApi(id);
  }, []);

  return [photos, name];
};
