import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import Header from './components/header.js';
import Modal from './components/modal.js';
import Table from './components/table.js';
import Form from './components/form.js';

function App() {
  const [ modalStatus, setModalStatus ] = useState(false);

  return (
    <Provider store={store} className="App">

      <Header />

      <button
        onClick={() => setModalStatus(true)}
        style={{
          position: 'absolute',
          margin: '10px 0px',
          padding: '5px 20px',
          top: '0.3rem',
          right: '0.5rem',
          fontSize: '18px',
          cursor: 'pointer',
          border: '2px black solid',
          backgroundColor: 'azure'
        }}>
        CREATE
      </button>

      {modalStatus && 
        (<Modal closeModal={() => setModalStatus(false)}>
          <Form />
        </Modal>)}

      <Table />

    </Provider>
  );
}

export default App;
