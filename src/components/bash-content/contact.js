import React from "react"
import { empty } from "./empty"

export const contact = () => (
  <div>
    <span className='prompt'>> joelrindfleisch $ </span>
    <span className='prompt'>c</span>
    <br />
    <div className='bash-content contact'>
      <span>LinkedIn</span>|
      <span><a href='https://www.linkedin.com/in/joelrindfleisch' target='_blank'>https://www.linkedin.com/in/joelrindfleisch</a></span>
    </div>
    <div className='bash-content contact'>
      <span>Twitter</span>|
      <span><a href='https://twitter.com/rindfleisch' target='_blank'>https://twitter.com/rindfleisch</a></span>
    </div>
    {empty()}
  </div>
)