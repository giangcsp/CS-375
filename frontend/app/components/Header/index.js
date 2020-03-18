/**
 *
 * Header
 *
 */

import React from "react";
import NavBar from "../NavBar";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <header className="container-fluid">
      <div className="row header__title">
        <div className="col-12">
        <h1>Bill Bar</h1>        
        </div>
      </div>      
    </header>    
  );
}

export default Header;
