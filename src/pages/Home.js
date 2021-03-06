import React, { createRef } from "react";
import "../styles/Home.scss";
import PostBox from "../layouts/PostBox";
import PostList from "../layouts/PostList";
import PostModal from "../layouts/PostModal";
import withCurrentUser from "../hocs/withCurrentUser";
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      posts: [],
      hiddenSpinner: true,
      postIsPublic: false,
    };

    this.modalRef = createRef();

    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostCreate = this.handlePostCreate.bind(this);
    this.handlePublishSelect = this.handlePublishSelect.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handlePostChange = (e) => {
    this.setState({ postText: e });
  };

  handlePostCreate = async () => {
    const postBody = {
      'text': this.state.postText,
      'user': '62870c4aac9bb81a2fe49fc1',
      'isPublic': this.state.postIsPublic,
    };

    const response = await fetch(
      "https://fast-crag-62434.herokuapp.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      }
    )
    const jsonResponse = await response.json();
    this.setState({ posts: [...this.state.posts, jsonResponse] });
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
    console.log(this.props.currentUser);
    const response = await this.fetchPost();
    const responseArray = await response.json();
    this.setState({ posts: responseArray });
  }

  handlePublishSelect = (e) => {
    const selectedOption = e.label;
    selectedOption === 'public' ? this.setState({ postIsPublic: true }) : this.setState({ postIsPublic: false });
  }

  handleClickEdit = () => {
    this.modalRef.current.open()
  }

  render() {

    return (
      <div>
        <PostBox
          className="textPost"
          placeHolder="what's going on?"
          postText={this.state.postText}
          setPostText={this.handlePostChange}
          value={this.state.postText}
          onClick={this.handlePostCreate}
          onPublishSelect={this.handlePublishSelect}
        ></PostBox>
        <PostList posts={this.state.posts} onClickEdit={this.handleClickEdit}></PostList>
        <PostModal ref={this.modalRef} />
      </div>
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.string,
}

export default withCurrentUser(Home);
