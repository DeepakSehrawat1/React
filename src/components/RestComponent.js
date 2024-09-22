const RestComponent = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className=" w-[300px] h-[300px] border-2 border-pink-250 mx-5 my-5 text-pretty truncate">
      <img
        className="w-[200px] h-[150px] m-auto"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="p-2 text-2xl font-bold">{name}</h3>
      <p className="p-2">
        <span className="mr-2">Our Best and Ur fav:-</span>
        {cuisines.join(" ,")}
      </p>
    </div>
  );
};

export const RestUpdateComponent = (props) => {
  const RestComponent = props.att;
  const item = props.item;
  return (
    <div>
      <div className="absolute border bg-slate-200 text-left">
        fast delivery
      </div>
      <RestComponent {...item.info} />
    </div>
  );
};

export default RestComponent;
