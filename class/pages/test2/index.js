import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosPage() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get(
        "https://www.googleapis.com/youtube/v3/search"
      );
      setImgUrl(result.part.);
    };
    getImg();
  });

  return (
    <>
      <img src={imgUrl} />
    </>
  );
}
