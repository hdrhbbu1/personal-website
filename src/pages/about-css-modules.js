import React from 'react';

// CSS Modules generates unique class names
import styles from './about-css-modules.module.css';
console.log(styles);

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <div>
    <h1>About CSS Modules</h1>
    <p>This page was styled with CSS Modules.</p>
    <h2>Problems with CSS at scale (large projects, hundreds of developers)</h2>
    <ul>
      <li>Global Namespace</li>
      <li>Dependencies</li>
      <li>Dead Code Elimination</li>
      <li>Minification</li>
      <li>Sharing Constants</li>
      <li>Non-deterministic Resolution</li>
      <li>Isolation</li>
    </ul>
    <h2>Benefits of CSS Modules</h2>
    <ul>
      <li>Modular and Reusable CSS</li>
      <li>Explicit Dependencies</li>
      <li>No Global Scope</li>
    </ul>
    <h2>Example User Component styled with CSS Modules</h2>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </div>
);