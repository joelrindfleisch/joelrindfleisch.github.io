import React from "react"
import { empty } from "./empty"
import { getTooltip } from "./date-tooltip"

export const education = () => (
  <div>
    <span className='prompt'>> joelrindfleisch $ </span>
    <span className='prompt'>e</span>
    <br />
    <div className='bash-content education'>
      {getTooltip(1450461600)}|
      <span>NDSU</span>|
      <span>Masters of Software Engineering</span>
    </div>
    <div className='bash-content education'>
      {getTooltip(1273856400)}|
      <span>Iowa State University</span>|
      <span>Management Information Systems</span>
    </div>
    {empty()}
  </div>
)