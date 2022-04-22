import React/*, { useRef, useEffect }*/ from 'react'
import Select from 'react-select';
import Button from './components/Button';
import './styles/App.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    console.log('ref: ', this.selectRef.current.controlRef.childNodes);
    this.selectRef.current.controlRef.parentNode.setAttribute('role', 'combobox');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Select 
          ref={this.selectRef}
          options={options} 
          role='textbox'
          className='test'
        />
        <Button 
          onCLick={() => {}}
          label='Click me!!!'
        />
      </div>
    )
  }
}


/*function App() {
  const selectRef = useRef()

  useEffect(() => {
    console.log('ref: ', selectRef.current.controlRef.parentNode);
    selectRef.current.controlRef.parentNode.setAttribute('role', 'combobox');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Select 
        ref={selectRef}
        options={options} 
        role='textbox'
        className='test'
      />
    </div>
  );
}*/

export default App;
