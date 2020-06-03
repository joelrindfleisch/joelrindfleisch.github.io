import "./key.scss"
import React from "react"
import PropTypes from "prop-types"

const Key = ({ keyName, onKeyChange }) => {
  return (
    <div
      className='key'
      onClick={() => onKeyChange(keyName)}
    >
      {keyName}
    </div>
  )
}

Key.propTypes = {
  keyName: PropTypes.string.isRequired,
  onKeyChange: PropTypes.func.isRequired,
}

export default Key