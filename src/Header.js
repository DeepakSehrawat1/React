import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div id="mainheader">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
        alt="logo"
      />
      <ul className="list">
        <li id="li1">
          <Link to="/about">Khaana corporate</Link>
        </li>
        <li id="li2">
          <Link>Offers</Link>
        </li>
        <li id="li3">
          <Link to="/help">Help</Link>
        </li>
        <li id="li4">
          <a>Cart</a>
        </li>
        <li id="li5">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
