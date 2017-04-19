import React from 'react';
import PropTypes from 'prop-types';

const GroupPersistControl = ({ loading, onSave, onLoad }) => {
  const onSaveClick = e => {
    e.preventDefault();

    if (loading) {
      return;
    }

    onSave();
  };

  const onLoadClick = e => {
    e.preventDefault();

    if (loading) {
      return;
    }

    onLoad();
  };

  return (
    <div className="group-persist btn-group" role="group">
      <fieldset disabled={loading}>
        <button type="button" className="btn btn-default" onClick={onSaveClick}>
          Save
        </button>
        <button type="button" className="btn btn-default" onClick={onLoadClick}>
          Load
        </button>
      </fieldset>
    </div>
  );
};

GroupPersistControl.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
};

export default GroupPersistControl;
