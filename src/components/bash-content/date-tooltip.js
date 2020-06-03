import React from "react"

export const getTooltip = (epochDate) => (
  <span className='tooltip'>
  {epochDate}
    <span className="tooltiptext">
      {new Date(epochDate * 1000).toLocaleDateString()}
    </span>
  </span>
)