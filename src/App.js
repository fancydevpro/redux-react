import React, { Component } from 'react';

import './App.css';
import List from './js/components/List'
import Form from './js/components/Form'
import Error from './js/components/Error'

class App extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <Error />
        <div className='col-md-4 offset-md-1'>
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
