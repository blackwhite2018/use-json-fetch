import React from 'react';
import Component from './Component';

const App = () => {
    return (
        <div className="container">
            <Component url={ 'http://localhost:7070/data' } />
            <Component url={ 'http://localhost:7070/error' } />
            <Component url={ 'http://localhost:7070/loading' } />
        </div>
    );
};

export default App;

