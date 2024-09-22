import React from "react";
import UserClass from "./UserClass";

class KhanaClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
      count2: 2,
    };
    console.log("parentConstructor");
  }

  componentDidMount() {
    console.log("parent");
  }

  render() {
    const { count, count1, count2 } = this.state;
    const { name, location } = this.props;
    console.log("parentRender");
    return (
      <>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{count}</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          increasw
        </button>
        <h4>{count1}</h4>
        <button
          onClick={() => {
            this.setState({ count1: count1 + 1 });
          }}
        >
          increasw
        </button>
        <h5>{count2}</h5>
        <button
          onClick={() => {
            this.setState({ count2: count2 + 1 });
          }}
        >
          increasw
        </button>

        <UserClass task={1} />
        <UserClass task={2} />
        {console.log("hello")}
      </>
    );
  }
}

export default KhanaClass;
