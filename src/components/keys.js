import './keys.scss';
import React from "react"
import PropTypes from "prop-types"
import Key from "./key"

const Keys = ({onKeyChange}) => {

  return (
    <div className='keys'>
      <Key keyName='E' onKeyChange={onKeyChange}/>
      <Key keyName='S' onKeyChange={onKeyChange}/>
      <Key keyName='C' onKeyChange={onKeyChange}/>
      <Key keyName='X' onKeyChange={onKeyChange}/>
    </div>
  );
};

Keys.propTypes = {
  onKeyChange: PropTypes.func.isRequired,
};

export default Keys;