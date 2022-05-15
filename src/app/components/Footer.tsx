import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div className='animate__animated animate__pulse animate__infinite	infinite'>
        Timer: <span className='score-value'>30s</span>
      </div>
      <div id="power-by">
        Power by: <a target="_blank" href="https://github.com/Ricardo-Costa">Ricardo-Costa</a>
      </div>
    </div>
  )
}