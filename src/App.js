import { useRef, useEffect } from 'react'
import logo from './logo.svg';
import Select from 'react-select';
import './App.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function App() {
  const selectRef = useRef()

  useEffect(() => {
    console.log('ref: ', selectRef.current.controlRef/*.parentNode*/);
    selectRef.current.controlRef.setAttribute('role', 'combobox2')
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
        role='combobox'
        className='test'
      />
    </div>
  );
}

export default App;
