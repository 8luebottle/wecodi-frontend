import React, { Component } from 'react';
import './Readmore.scss';

const Readmore = () => {
  return (
    <div className="Readmore">
      <div className="LineWrap">
        <div className="LeftLine"></div>
        <div className="RightLine"></div>
      </div>
      <div className="ReadmoreText">
        <span>Read More</span>
      </div>
    </div>
  );
};

export default Readmore;