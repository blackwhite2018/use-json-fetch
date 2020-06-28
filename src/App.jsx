import React from 'react';
import useJsonFetch from './useJsonFetch';

const App = () => {
    const [data1, loading1, error1] = useJsonFetch('http://localhost:7070/data');
    const [data2, loading2, error2] = useJsonFetch('http://localhost:7070/error');
    const [data3, loading3, error3] = useJsonFetch('http://localhost:7070/loading');

    return (
        <div className="container"></div>
    );
};

export default App;

