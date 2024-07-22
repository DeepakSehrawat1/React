const heading1 = React.createElement(
  "h1",
  { style: { backgroundColor: "red" }, id: "toyo" },
  "hello World"
);

const heading2 = React.createElement(
  "h2",
  { style: { backgroundColor: "green" }, id: "toyo2" },
  "hello World2"
);

const divele = React.createElement(
  "h3",
  { style: { backgroundColor: "yellow" }, id: "toyo3" },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(divele);
