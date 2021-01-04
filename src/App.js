import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import Table from './components/table.js';
import Form from './components/form.js';

function App() {
  return (
    <Provider store={store} className="App">

      <header className="App-header">
        <h1>
          Wine Reviews
        </h1>
      </header>

      <Table />
      <Form />

    </Provider>
  );
}

export default App;
