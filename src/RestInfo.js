import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Info_url } from "./config";
import { Info_2url } from "./config";

const RestInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function foundData() {
      const data = await fetch(Info_url + id + Info_2url);

      const jsonData = await data.json();
      console.log(jsonData);
      setRestInfo(jsonData.data);
    }
    foundData();
  }, []);
  if (restInfo === null) {
    return <h1>loading</h1>;
  }

  const { name, avgRating, costForTwoMessage, cuisines, isOpen } =
    restInfo?.cards[2]?.card?.card?.info;
  return (
    <>
      <h1>{name}</h1>
      <h6>{avgRating}</h6>
      <h3>{costForTwoMessage}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h2>{isOpen}</h2>
    </>
  );
};

export default RestInfo;
