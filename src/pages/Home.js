import React from "react";
import "../styles/Home.scss";
import PostBox from "../layouts/PostBox";
import PostList from "../layouts/PostList";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      posts: [],
      hiddenSpinner: true,
      postIsPublic: false,
    };
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostCreate = this.handlePostCreate.bind(this);
  }

  handlePostChange = (e) => {
    this.setState({ postText: e.target.value });
  };

  handlePostCreate = async () =>{
    const postBody = {
      'text': this.state.postText,
      'user': '62870c4aac9bb81a2fe49fc1',
      'isPublic': this.state.postIsPublic,
    };

    /*const response = */await fetch(
      "https://fast-crag-62434.herokuapp.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      }
    )
  }

  fetchPost = async () => {
    const response = await fetch(
      "https://fast-crag-62434.herokuapp.com/posts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  };

  async componentDidMount() {
    const response = await this.fetchPost();
    const responseArray = await response.json();
    this.setState({posts: responseArray });
  }

  render() {
    return (
      <div>
        <PostBox
          className="textPost"
          placeHolder="what's going on?"
          onChange={this.handlePostChange}
          value={this.state.postText}
          onClick={this.handlePostCreate }
        ></PostBox>
        <PostList posts={ this.state.posts }></PostList>
      </div>
    );
  }
}

export default Home;
