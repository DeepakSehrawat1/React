import React from "react";
import ReactDOM from "react-dom/client";
/*const HeadingComponent = function () {
  return (
    <div>
      <h3>uioii</h3>
    </div>
  );
};

const head = <h1>pupo</h1>;
const heading = (
  <div>
    <HeadingComponent />
    {head}
    <h1>okytioui</h1>
    <h2>nokytoi</h2>
  </div>
);*/

/*let heading1 = React.createElement("h1", {}, "logo");

let header = React.createElement("Header", {}, [
  React.createElement("h1", {}, "logo"),
  React.createElement("h2", {}, "logo2"),
  React.createElement("h3", {}, "logo3"),
]);*/

/*const header = (
  <header>
    <h1>logo</h1>
    <h2>logo1</h2>
    <h3>logo3</h3>
  </header>
);*/

const HeaderComponent = () => {
  return (
    <header id="mainheader">
      <img src="" alt="logo" id="first" />{" "}
      <div id="searchsys">
        <input type="text" placeholder="search" />
        <button>search</button>
      </div>{" "}
      <a id="last">user</a>
      <div className="clear"></div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeaderComponent />);
