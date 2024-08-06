import { Children, Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paani: 50,
    };
    console.log("childConstructor" + this.props.task);
  }
  componentDidMount() {
    async function tyu() {
      const data = await fetch("ytytyty");
      console.log(data);
    }

    tyu();
    console.log("child hu");
  }

  render() {
    console.log("childRender" + this.props.task);
    return (
      <>
        <h1>{this.state.paani}</h1>
        <h2>vudj</h2>
      </>
    );
  }
}

export default UserClass;
