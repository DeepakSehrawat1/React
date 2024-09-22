import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  //subscribed to the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div id="mainheader" className="flex place-content-between bg-blue-200">
      {" "}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
        alt="logo"
        className="w-20 h-16 ml-10"
      />
      <ul className="flex items-center">
        <li className="px-7 font-bold">
          <Link to="/about">Khaana corporate</Link>
        </li>
        <li className="px-7 font-bold">
          <Link>Offers</Link>
        </li>
        <li className="px-7 font-bold">
          <Link to="/help">Help</Link>
        </li>
        <li className="px-7 font-bold">
          <Link>Cart-({cartItems.length})</Link>
        </li>
        <li className="px-7 font-bold">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
