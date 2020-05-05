import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Pictures = (props) => (
  <span>
    <img src={props.picture} alt="foodpic" width="100" height="150"/>
  </span>
);

export default Pictures;
