import React, { PropTypes } from 'react';
import * as groupTypes from '../../constants/groupTypes';

const GroupSwitchControl = ({ loading, groupType, onSwitch }) => {
  const switchType = e => {
    const clickedType = e.target.value;
    if (groupType != clickedType) {
      onSwitch(clickedType);
    }
  };

  return (
    <div className="group-switch-control btn-group" role="group" aria-label="Group member type">
      <fieldset disabled={loading}>
        <button
          type="button"
          value={groupTypes.GROUP_TYPE_JUNIMO}
          className={'btn btn-default' + (groupType == groupTypes.GROUP_TYPE_JUNIMO ? ' active' : '')}
          onClick={switchType}
        >
          Junimo
        </button>
        <button
          type="button"
          value={groupTypes.GROUP_TYPE_BIRB}
          className={'btn btn-default' + (groupType == groupTypes.GROUP_TYPE_BIRB ? ' active' : '')}
          onClick={switchType}
        >
          Birb
        </button>
      </fieldset>
    </div>
  );
};

GroupSwitchControl.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  groupType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupSwitchControl;
