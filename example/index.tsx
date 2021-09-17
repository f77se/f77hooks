import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useToggle } from '../src';

const App = () => {
  return (
    <div>
      <h3>useToggle</h3>
      <ToggleComponent />
    </div>
  );
};

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <>
      <div>{value.toString()}</div>
      <button onClick={()=>toggleValue()}>Toggle</button>
      <button onClick={()=>toggleValue(true)}>Make true</button>
      <button onClick={()=>toggleValue(false)}>Make false</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
