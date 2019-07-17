import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import reducers from './reducers';

ReactDom.render(

<Provider store= {createStore(reducers)}>
<App/>
</Provider>
,document.querySelector('#root')
);