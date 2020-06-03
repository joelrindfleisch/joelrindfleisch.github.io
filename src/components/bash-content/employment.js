import React from "react"
import { empty } from "./empty"
import { getTooltip } from "./date-tooltip"

export const employment = () =>  (
  <div>
    <span className='prompt'>> joelrindfleisch $ </span>
    <span className='prompt'>e</span>
    <br/>
    <div className='bash-content employment'>
      {getTooltip(1559397600)}|
      <span>Dwolla</span>|
      <span>Senior Software Engineer</span>
    </div>
    <div className='bash-content employment'>
      {getTooltip(1440597600)}|
      <span>John Deere</span>|
      <span>Senior Software Developer / Dev Lead</span>
    </div>
    <div className='bash-content employment'>
     {getTooltip(1389020400)}|
      <span>DuPont Pioneer</span>|
      <span>Senior Software Developer</span>
    </div>
    <div className='bash-content employment'>
      {getTooltip(1304949600)}|
      <span>ADP</span>|
      <span>Associate Application Developer</span>
    </div>
    <br/>
    {empty()}
  </div>
)
