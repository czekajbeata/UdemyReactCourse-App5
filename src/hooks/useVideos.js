import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
