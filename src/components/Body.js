import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../util/useFetchData.js";
import RestComponent from "./RestComponent.js";
import { RestUpdateComponent } from "./RestComponent.js";

function search(searchTxt, bodyData) {
  const result = bodyData?.filter((item) => {
    return item?.info?.name
      ?.toLocaleLowerCase()
      .includes(searchTxt.toLocaleLowerCase());
  });

  return result;
}

const Body = () => {
  const [searchTxt, setSearchText] = useState("");
  const [filterData, bodyData, setfilterData] = useFetchData();

  if (filterData === "") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="flex place-content-between mt-8 mb-15">
        <h1 className="w-[500px] ml-40 py-5 text-blue-500 font-mono hover:font-serif text-4xl">
          Get what you want!
        </h1>
        <div className="flex items-center">
          <input
            className="border-solid border-blue border-2"
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          <button
            className="w-[100px] ml-10 bg-blue-500 mr-10 border-solid border-2 rounded-md "
            onClick={() => {
              const newResult = search(searchTxt, bodyData);

              setfilterData(newResult);
            }}
          >
            need
          </button>
        </div>
      </div>
      <hr></hr>
      <div id="box-container" className="flex flex-wrap ml-20 my-10">
        {filterData.map((item) => {
          if (item.info.sla.deliveryTime < 25) {
            return (
              <Link to={"/restaurents/" + item.info.id} key={item.info.id}>
                <RestUpdateComponent att={RestComponent} item={item} />
              </Link>
            );
          }
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
