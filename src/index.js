import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/todomvc-app-css/index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import TodoApp from './containers/TodoApp';
import DevTools from './containers/DevTools';

const store = configureStore();

var element = (
    <Provider store={store}>
        <div>
            <TodoApp/>
            <DevTools/>
        </div>
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
