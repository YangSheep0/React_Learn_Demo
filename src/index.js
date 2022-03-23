import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';

import store from './rudex/store'

import { Provider } from 'react-redux'

ReactDOM.render(
  
  <Provider store={store}>
    <APP />
  </Provider>,
  document.getElementById('root')
)

/* store.subscribe(() => {
  ReactDOM.render(
    <APP />,
    document.getElementById('root')
  )
}) */

