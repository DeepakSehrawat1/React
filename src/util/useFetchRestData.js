import { useEffect, useState } from "react";

import { Info_url } from "./config";
import { Info_2url } from "./config";
const useFetchRestData = (id) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(Info_url + id + Info_2url);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestInfo(jsonData.data);
  }

  return restInfo;
};

export default useFetchRestData;
