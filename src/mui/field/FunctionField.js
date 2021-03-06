import React, { PropTypes } from 'react';

/**
 * @example
 * <FunctionField source="last_name" label="Name" render={record => `${record.first_name} ${record.last_name}`} />
 */
const FunctionField = ({ record = {}, source, render, elStyle }) => record ?
    <span style={elStyle}>{render(record)}</span> :
    null;

FunctionField.propTypes = {
    elStyle: PropTypes.object,
    label: PropTypes.string,
    render: PropTypes.func.isRequired,
    record: PropTypes.object,
    source: PropTypes.string,
};

export default FunctionField;
