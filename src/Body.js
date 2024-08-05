import { Link } from "react-router-dom";
import { Img_url } from "./config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestComponent = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div id="box">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(" ,")}</p>
    </div>
  );
};

function search(searchTxt, bodyData) {
  const result = bodyData?.filter((item) => {
    return item?.info?.name
      ?.toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });

  return result;
}

const Body = () => {
  const [bodyData, setBodyData] = useState([]);
  const [filterData, setfilterData] = useState("");
  const [searchTxt, setSearchText] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        console.log(jsonData);
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

  if (filterData === "") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h1 id="food">Get Your Food</h1>
      <input
        type="text"
        value={searchTxt}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          const dupi = bodyData;
          const newResult = search(searchTxt, bodyData);
          console.log(newResult);
          setfilterData(newResult);
        }}
      >
        need
      </button>
      <div id="box-container">
        {filterData.map((item) => {
          return (
            <Link to={"/restaurents/" + item.info.id} key={item.info.id}>
              <RestComponent {...item.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
