import React, {useState} from 'react';

import './global.css';

import Routes from './routes';
//import Header from './Header';

function App() {
  return (
    <Routes />
  );
}

// function App() {
//   return (
//     <Header title="Semana Omnistack" />
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

export default App;
