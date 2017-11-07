import React from 'react';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>About me</h1>
    <p>
      I'm a Web Developer in Massachussets. I currently freelance, and study
      computer science and web development through online courses and books. I
      enjoy building user interfaces, working with big data, optimizing
      performance, and drumming.
    </p>
  </div>
);
