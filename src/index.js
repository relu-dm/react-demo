import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducers from './reducers'


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const provider = <Provider store={store}><App/></Provider>;

ReactDOM.render(provider, document.getElementById('root'));

serviceWorker.unregister();
