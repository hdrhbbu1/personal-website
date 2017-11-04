import React from 'react';
import PageTitle from '../components/PageTitle';

export default ({transition}) => (
  <div style={transition && transition.style}>
    <PageTitle>
      <h1>About me</h1>
    </PageTitle>
    <p>I'm a Web Developer in Massachussets. I currently freelance and studying web development and computer science through online courses and books. I enjoy building user interfaces, working with data, optimizing performance, and drumming.</p>
  </div>
);