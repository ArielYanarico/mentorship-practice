import React from 'react'
import Select from 'react-select';
import Button from '../components/Button';
import FocusableDiv from '../components/FocusableDiv';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const buttonTypes = [
  'normal',
  'success',
  'warn',
  'dark',
  'error',
];

class MyComponents extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.state = {
      buttonType: buttonTypes[0],
    };
  }

  componentDidMount() {
    this.selectRef.current.controlRef.parentNode.setAttribute('role', 'combobox');
  }

  render() {
    const index = buttonTypes.indexOf(this.state.buttonType);
    const nextColor = (index < buttonTypes.length - 1)
      ? buttonTypes[index + 1] 
      : buttonTypes[0];

    return (
      <div>
        <Select 
          ref={this.selectRef}
          options={options} 
          role='textbox'
          className='test'
        />

        <FocusableDiv onFocus={()=>{console.log('Focused!!!!')}}></FocusableDiv>
        
        <Button 
          onClick={() => this.setState({buttonType: nextColor}) }
          label='Click me to change my color!'
          buttonType={this.state.buttonType}
        />

      </div>
    )
  }
}

export default MyComponents;
