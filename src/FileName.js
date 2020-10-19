import React from 'react';
import PropTypes from 'prop-types';

const FileName = ({ file }) => {
    return (
        <span>{file.name}</span>
      );
    }
    FileName.propTypes = {
      file: PropTypes.object.isRequired
    };

export default FileName;