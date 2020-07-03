import React from 'react';
import useJsonFetch from './useJsonFetch';

const ComponentData = ({ data, loading, error }) => {
    return (
        <div></div>
    );
};

const ComponentError = ({ data, loading, error }) => {
    return (
        <div></div>
    );
};

const ComponentLoading = ({ data, loading, error }) => {
    return (
        <div></div>
    );
};

const App = () => {
    const [data1, loading1, error1] = useJsonFetch('http://localhost:7070/data');
    const [data2, loading2, error2] = useJsonFetch('http://localhost:7070/error');
    const [data3, loading3, error3] = useJsonFetch('http://localhost:7070/loading');

    return (
        <div className="container">
            <ComponentData data={ data1 } loading={ loading1 } error={ error1 } />
            <ComponentError data={ data2 } loading={ loading2 } error={ error2 } />
            <ComponentLoading data={ data3 } loading={ loading3 } error={ error3 } />
        </div>
    );
};

export default App;

