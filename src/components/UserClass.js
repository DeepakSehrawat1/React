import { Children, Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: "demo",
        followers: 1,
        public_repos: 0,
      },
    };
  }

  async componentDidMount() {
    // this will run after initial render only
    const data = await fetch("https://api.github.com/users/DeepakSehrawat1");
    const jsonData = await data.json();
    this.setState({
      info: {
        name: jsonData.name,
        followers: jsonData.followers,
        public_repos: jsonData.public_repos,
      },
    });
  }

  componentDidUpdate() {
    // this will render after every update
  }

  componentWillUnmount() {
    // this will update once we change page/component ,just after unmounting this component from webpage
  }
  render() {
    let { name, followers, public_repos } = this.state.info;
    return (
      <>
        <h1>{name}</h1>
        <h2>followers:{followers}</h2>
        <h3>public repo:{public_repos}</h3>
      </>
    );
  }
}

export default UserClass;
