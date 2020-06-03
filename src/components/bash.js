import "./bash.scss"
import React from "react"
import PropTypes from "prop-types"
import { employment } from "./bash-content/employment"
import { education } from "./bash-content/education"
import { empty } from "./bash-content/empty"
import { contact } from "./bash-content/contact"

class Bash extends React.Component {
  getInstructions = () => {
    return (
      <span className='instructions'>
          Press 'E' for employment information <br/>
          Press 'S' for school information <br/>
          Press 'C' for contact information <br/>
          Press 'X' to clear
    </span>
    )
  }

  getContent = (keyName) => {
    switch(keyName) {
      case 'X':
        return empty();
      case 'C':
        return contact();
      case 'E':
        return employment();
      case 'S':
        return education();
      default:
        return empty();
    }
  }

  render() {
    return (
      <div>
        <div className='window'>bash</div>
      <div className='bash'>
        {
          this.getInstructions()
        }
        {
          this.getContent(this.props.keyName)
        }
      </div>
      </div>
    )
  }
}

Bash.propTypes = {
  keyName: PropTypes.string,
}

export default Bash