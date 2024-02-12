import React from 'react';
import "./Heading.css"

export default function Heading({sectionText, mainText,styleHd}) {
  return (
    <div style={styleHd}>
        <div className='section-hd'>
            <div>
            <p className='line'>{sectionText}</p>
           
            </div>
            
            
        </div>
        <div className='main-hd'>
            <h1>
                {mainText}
            </h1>
        </div>
    </div>
  )
}
