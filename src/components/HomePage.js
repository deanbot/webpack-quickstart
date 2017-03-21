import React from 'react';
import BigJunimo from './bigJunimo/BigJunimo';

const HomePage = () => {
  return (
    <div className="app-body">
      <BigJunimo />
      <div className="container">
        <div className="content well">
          <h2>
            Oh my goodness! <small>A webpack build and React + Redux demo from the junimos!</small>
          </h2>
          <p />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
