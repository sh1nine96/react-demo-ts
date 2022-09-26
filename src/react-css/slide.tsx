import React from 'react';

import './slide.css';

import {headingStyling, bodyStyling, textCenter, listUnstyled, headingFinalStyle}
 from './slideStyling';


// we can also make separate file for these objects and we can import the file
// const headingStyling = {
//     fontSize: '4em'
// }

// const bodyStyling ={
//     fontSize: '2.5em'
// }

// const textCenter = {
//     textAlign: 'center' as const
// }

// const listUnstyled = {
//     listStyleType: 'none',
//     padding: 0,
//     margin: 0
// }

// using object spread we can combine properties of different objects

// const headingFinalStyle = {
//     ...headingStyling,
//     ...textCenter
// }

const el = (
    <div className="slide">
        <h1 style={headingFinalStyle}>Styling in React</h1>
        <hr />
        <ul style={ {...bodyStyling, ...listUnstyled}}>
            <li>we can style using CSS classes</li>
            <li>we can style using inline styling</li>
        </ul>
    </div>
);

export default el;

