import { useEffect, useState } from "react";
import { Img_url } from "../util/config";

const useFetchData = () => {
  const [bodyData, setBodyData] = useState([]);
  const [filterData, setfilterData] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();

        setBodyData(
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilterData(
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return [filterData, bodyData, setfilterData];
};

export default useFetchData;
