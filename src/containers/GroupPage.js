import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/groupActions';
import GroupControl from '../components/group/GroupControl';

export const GroupPage = ({ loading, actions, groupType, group }) => {
  return (
    <GroupControl
      loading={loading}
      onSwitch={actions.changeGroupType}
      groupType={groupType}
      members={group}
      onRemove={actions.removeFromGroup}
      onAdd={actions.addToGroup}
      onSave={actions.saveGroup}
      onLoad={actions.loadGroup}
    />
  );
};

GroupPage.propTypes = {
  actions: PropTypes.object.isRequired,
  groupType: PropTypes.string.isRequired,
  group: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    groupType: state.groupType,
    group: state.group,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
