import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchRestData from "../util/useFetchRestData";
import RestInfo2 from "./RestInfo2";

const RestInfo = () => {
  /*const [restInfo, setRestInfo] = useState(null);*/ // we have to make our code modular here this component do two task fetch and put data on
  //on screen.   so we keep this to present data/to display data and create our own custom hook to increase modularity where we fetch daata
  // in this we we can seperate their work, and this componenet is only responsible for displaying data.
  const [showListFlag, setShowListFlag] = useState(false);
  const { id } = useParams();

  const restInfo = useFetchRestData(id);

  if (restInfo === null) {
    return <h1>loading</h1>;
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    isOpen,
    totalRatingsString,
  } = restInfo?.cards[2]?.card?.card?.info;

  const itemList =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const renderList = itemList.filter((item) => {
    return (
      item.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  function showList() {
    showListFlag ? setShowListFlag(false) : setShowListFlag(true);
  }

  return (
    <>
      <div>
        <h1 className="w-2/12 m-auto mt-12 mb-6 font-bold text-3xl text-pink-500">
          {name}
        </h1>
      </div>
      <div className="w-4/12 m-auto border-2 border-blue-500 p-6 text-left bg-slate-300 font-bold shadow-2xl shadow-slate-500 rounded-xl">
        <h6 className="p-2 text-1.5xl">
          Ratings:<span className="ml-3">{avgRating}</span>{" "}
          <span className="text-sm">({totalRatingsString})</span>
        </h6>
        <div className="px-2 flex flex-wrap">
          <h3 className="pt-2 text-1.5xl">{costForTwoMessage}</h3>
          <h4 className="pt-2 px-1 text-1.5xl">{cuisines.join(" ,")}</h4>
        </div>
        <h2 className="p-2 text-1.5xl">{isOpen}</h2>
      </div>
      <hr className="mt-16" />
      <div className="w-2/12 m-auto  text-2xl text-pink-500 mt-4">
        <h1 className="ml-3 ">Menu</h1>
      </div>

      {renderList.map((item) => {
        return <RestInfo2 item={item} />;
      })}
    </>
  );
};

export default RestInfo;
