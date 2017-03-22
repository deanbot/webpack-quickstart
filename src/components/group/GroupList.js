import React, { PropTypes } from 'react';
import GroupMember from './GroupMember';
import GroupAddControl from './GroupAddControl';

const GroupList = ({ members, onRemove, onAdd, loading }) => {
  return (
    <div className="group-members">
      {members.length == 0 ? <p>Use add, save, or load to populate the group</p> : ''}
      {members.map(member => <GroupMember key={member.id} member={member} onRemove={onRemove} loading={loading} />)}
      <GroupAddControl onAdd={onAdd} loading={loading} />
    </div>
  );
};

GroupList.propTypes = {
  members: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupList;
