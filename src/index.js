import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';

import store from './rudex/store'


ReactDOM.render(
  <APP />,
  document.getElementById('root')
)

store.subscribe(() => {
  ReactDOM.render(
    <APP />,
    document.getElementById('root')
  )
})

