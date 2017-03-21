import React, { PropTypes } from 'react';
import GroupList from './GroupList';
import GroupSwitchControl from './GroupSwitchControl';
import LoadingDots from '../common/LoadingDots';
require('./GroupControl.scss');

class GroupControl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSwitch = this.onSwitch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSwitch(type) {
    this.props.onSwitch(type);
  }

  onAdd() {
    const member = {
      type: this.props.groupType
    };
    this.props.onAdd(member);
  }

  onRemove(member) {
    this.props.onRemove(member.id);
  }

  render() {
    const { groupType, members, loading } = this.props;
    return (
      <div>
        <GroupSwitchControl onSwitch={this.onSwitch} groupType={groupType} loading={loading} />
        <GroupList members={members} onAdd={this.onAdd} onRemove={this.onRemove} loading={loading} />
        {loading && <LoadingDots interval={100} dots={20} />}
      </div>
    );
  }
}

GroupControl.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
  groupType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupControl;
