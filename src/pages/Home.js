import React from "react";
import "../styles/Home.scss";
import PostBox from "../layouts/PostBox";
import PostList from "../layouts/PostList";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      hiddenSpinner: true,
    };
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange = (e) => {
    this.setState({ postText: e.target.value });
  };

  fetchPost = async () => {
    const response = await fetch(
      "https://fast-crag-62434.herokuapp.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }
    );
    return response;
  };

  async componentDidMount() {
    const response = await this.fetchPost();
    console.log(await response.json());
  }

  render() {
    return (
      <div>
        <PostBox
          className="textPost"
          placeHolder="what's going on?"
          onChange={this.handlePostChange}
          value={this.state.postText}
        ></PostBox>
        <PostList></PostList>
      </div>
    );
  }
}

export default Home;
