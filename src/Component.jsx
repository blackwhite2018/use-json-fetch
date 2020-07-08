import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from './useJsonFetch';

const Component = ({ url }) => {
    const [data, isLoading, error] = useJsonFetch(url);
    
    if (error) {
        return <div>Error data</div>
    }

    return !isLoading ? <div>{ data.status }</div> : <div>download...</div>;
};

Component.propTypes = {
    props: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default Component;
