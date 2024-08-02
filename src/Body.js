import RestaurentList from "./config";
import { Img_url } from "./config";
import { useState } from "react";

const RestComponent = ({ name, cuisines }) => {
  return (
    <div id="box">
      <img src={Img_url} />
      <h3>{name}</h3>
      <p>{cuisines.join(" ,")}</p>
    </div>
  );
};

function search(searchTxt) {
  const result = RestaurentList.filter((item) => {
    return item?.data?.name
      ?.toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });
  console.log(result);
  return result;
}

const Body = () => {
  const [bodyData, setBodyData] = useState(RestaurentList);
  const [searchTxt, setSearchText] = useState("");

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
          const newResult = search(searchTxt);
          console.log(newResult);
          setBodyData(newResult);
        }}
      >
        need
      </button>
      <div id="box-container">
        {bodyData.map((item) => {
          return <RestComponent {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
