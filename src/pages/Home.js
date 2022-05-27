import React from 'react';
import '../styles/Home.scss';
import TextArea from '../components/TextArea';
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
        <TextArea className='textPost' placeholder="what's going on?" onChange={ this.handlePostChange } value={ this.state.postText }></TextArea>
      </div>
    )
  }
}

export default Home;
