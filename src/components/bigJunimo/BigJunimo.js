import React from 'react';
const src = require('../../images/junimo.gif');
require('./BigJunimo.scss');

const Junimo = () => {
  return (
    <div className="junimo">
      <img src={src} />
    </div>
  );
};

export default Junimo;
