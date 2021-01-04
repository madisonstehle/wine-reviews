import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import Table from './components/table.js';

function App() {
  return (
    <Provider store={store} className="App">
      <header className="App-header">
        <h1>
          Wine Reviews
        </h1>
      </header>

      <Table />
    </Provider>
  );
}

export default App;
