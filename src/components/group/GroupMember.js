import React, { PropTypes } from 'react';
import * as groupTypes from '../../constants/groupTypes';
const srcJunimo = require('../../images/junimo.gif');
const srcBirb = require('../../images/birb.png');

const GroupMember = ({ member, onRemove, loading }) => {
  let memberSrc = '';

  if (member.type == groupTypes.GROUP_TYPE_JUNIMO) {
    memberSrc = srcJunimo;
  } else if (member.type == groupTypes.GROUP_TYPE_BIRB) {
    memberSrc = srcBirb;
  }

  const handleClick = e => {
    e.preventDefault();

    if (loading) {
      return;
    }

    onRemove(member);
  };

  return (
    <button className="group-member thumbnail" onClick={handleClick} disabled={loading}>
      <img src={memberSrc} />
    </button>
  );
};

GroupMember.propTypes = {
  member: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default GroupMember;
