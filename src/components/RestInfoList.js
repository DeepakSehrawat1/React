import { Info_url } from "../util/config";

const RestInfoList = ({ itemProp }) => {
  console.log(itemProp);
  return (
    <div>
      {itemProp?.card?.card?.itemCards.map((item1) => {
        return (
          <div
            key={item1?.card?.info?.id}
            className="w-[100%] font-bold bg-blue-100 p-2 mt-2 flex justify-between"
          >
            <div>
              <div>{item1?.card?.info?.name}</div>
              <div>{item1?.card?.info?.category}</div>
              <div>
                {item1?.card?.info?.price
                  ? item1?.card?.info?.price / 100
                  : item1?.card?.info?.defaultPrice / 100}
              </div>
            </div>
            <div>
              <img
                className="w-[80px]"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item1?.card?.info?.imageId
                }
                alt="image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestInfoList;
