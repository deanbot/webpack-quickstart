import React, { PropTypes } from 'react';
import GroupList from './GroupList';
import GroupSwitchControl from './GroupSwitchControl';
import GroupPersistControl from './GroupPersistControl';
require('./GroupControl.scss');

class GroupControl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSwitch = this.onSwitch.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSave = this.onSave.bind(this);
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

  onSave() {
    this.props.onSave(this.props.members);
  }

  render() {
    const { groupType, members, loading } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <GroupSwitchControl onSwitch={this.onSwitch} groupType={groupType} loading={loading} />
          </div>
          <div className="col-xs-6">
            <GroupPersistControl onSave={this.onSave} onLoad={this.props.onLoad} loading={loading} />
          </div>
        </div>
        {loading && <strong className="loading">Loading: ...</strong>}
        <GroupList members={members} onAdd={this.onAdd} onRemove={this.onRemove} loading={loading} />
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
  loading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
};

export default GroupControl;
