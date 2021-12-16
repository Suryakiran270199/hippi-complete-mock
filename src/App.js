import React, { useState } from 'react';
import { Provider } from 'react-redux';
import rootReducer from '../src/store/reducer';
import { createStore } from 'redux';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const store = createStore(rootReducer);

function App() {
    const [ss,setSs] =useState(false);
    return (
        <Provider store={store}>
            <h1>hello iam kiran</h1>
            {!ss?
            <ComponentA setSs={setSs}/>:
            <ComponentB setSs={setSs}/>
            }
        </Provider>

    )
}

export default App;
