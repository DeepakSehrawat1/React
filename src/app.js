import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";

/*const Test = () => {
  let [test, setTest] = useState();
  return (
    <>
      <input
        type="text"
        value={test}
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
      <h1>{test}</h1>
    </>
  );
};*/

const AppContent = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppContent />);
