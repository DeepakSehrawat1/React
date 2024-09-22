import RestInfoList from "./RestInfoList";
import { useState } from "react";

const RestInfo2 = ({ item }) => {
  const [showListFlag, setShowListFlag] = useState(false);
  function showList() {
    showListFlag ? setShowListFlag(false) : setShowListFlag(true);
  }
  return (
    <div>
      <div
        key={item?.card?.card?.title}
        className=" w-6/12 m-auto border-b-2 border-blue-300 "
      >
        <div className=" p-4 cursor-pointer font-bold">
          <span onClick={showList}> {item?.card?.card?.title}</span>

          {showListFlag && <RestInfoList itemProp={item} />}
        </div>
      </div>
    </div>
  );
};

export default RestInfo2;
