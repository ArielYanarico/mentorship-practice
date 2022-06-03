import React from 'react';
import '../styles/Home.scss';
import PostArea from '../layouts/PostArea';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
      hiddenSpinner: true
    }
    this.handlePostChange = this.handlePostChange.bind(this);
  }

  handlePostChange = (e) =>{
    this.setState({postText: e.target.value})
  }

  render() {
    return (
      <div>
        <PostArea className='textPost' placeHolder="what's going on?" onChange={ this.handlePostChange } value={ this.state.postText }></PostArea>
      </div>
    )
  }
}

export default Home;
