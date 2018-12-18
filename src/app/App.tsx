import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Viewport from '../router/Viewport.component';
import './App.css';
import { store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Viewport />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
