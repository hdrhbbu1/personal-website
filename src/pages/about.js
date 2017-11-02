import React from 'react';

export default ({transition}) => (
  <div style={transition && transition.style}>
    <h1>About me</h1>
    <p>
      I Build User Interfaces.
    </p>
  </div>
);