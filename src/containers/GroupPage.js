import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/groupActions';
import GroupControl from '../components/group/GroupControl';

export const GroupPage = props => {
  return (
    <GroupControl
      loading={props.loading}
      onSwitch={props.actions.changeGroupType}
      groupType={props.groupType}
      members={props.group}
      onRemove={props.actions.removeFromGroup}
      onAdd={props.actions.addToGroup}
      onSave={props.actions.saveGroup}
      onLoad={props.actions.loadGroup}
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
  if (state.ajaxCallsInProgress > 0) {
    console.log('loading!');
  }
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
