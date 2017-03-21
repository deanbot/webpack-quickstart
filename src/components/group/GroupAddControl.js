import React, { PropTypes } from 'react';

const GroupAddControl = ({ onAdd, loading }) => {
  const handleAdd = e => {
    e.preventDefault();

    if (loading) {
      return;
    }

    onAdd();
  };

  return (
    <button disabled={loading} type="button" className="btn btn-default" aria-label="Add group member" onClick={handleAdd}>
      <span className="glyphicon glyphicon-plus" aria-hidden="true" />
    </button>
  );
};

GroupAddControl.propTypes = {
  onAdd: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupAddControl;
