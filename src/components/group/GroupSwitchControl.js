import React, { PropTypes } from 'react';
import * as groupTypes from '../../constants/groupTypes';

class GroupSwitchControl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.switchType = this.switchType.bind(this);
  }

  switchType(e) {
    const clickedType = e.target.value;
    if (this.props.groupType != clickedType) {
      this.props.onSwitch(clickedType);
    }
  }

  render() {
    const { groupType, loading } = this.props;
    return (
      <div className="group-switch-control btn-group" role="group" aria-label="Group member type">
        <fieldset disabled={loading}>
          <button
            type="button"
            value={groupTypes.GROUP_TYPE_JUNIMO}
            className={'btn btn-default' + (groupType == groupTypes.GROUP_TYPE_JUNIMO ? 'active' : '')}
            onClick={this.switchType}
          >
            Junimo
          </button>
          <button
            type="button"
            value={groupTypes.GROUP_TYPE_BIRB}
            className={'btn btn-default' + (groupType == groupTypes.GROUP_TYPE_BIRB ? 'active' : '')}
            onClick={this.switchType}
          >
            Birb
          </button>
        </fieldset>
      </div>
    );
  }
}

GroupSwitchControl.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  groupType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupSwitchControl;
