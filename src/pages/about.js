import React from 'react';
import styled from 'styled-components';

import Block from '../components/Block';
import Header from '../components/Header';
import { rhythm } from '../utils/typography';
import { colors, sizes } from '../theme';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${rhythm(2)} 0;
  ${sizes.Desktop} {
    padding: ${rhythm(3)} 0;
  }
`;

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Header>
      <h1>About</h1>
    </Header>
    <Wrapper>
      <Block title="Hello">
        <p>
          I'm a Web Developer currently residing in Massachussets. I freelance, study
          computer science and web development through online courses and books. I
          enjoy building user interfaces, working with data, optimizing
          performance, and drumming.
        </p>
      </Block>

      <Block title="Experience">
        <article>
          <h3>Web Developer</h3>
          <h4>Hopkinton Education Foundation, Hopkinton, MA</h4>
          <p>
            Hopkinton Education Foundation is a non-profit organization that
            fundraises for the sole purpose of funding grants to advance
            innovation in the Hopkinton Public Schools.
          </p>
          <ul>
            <li>
              Decreased initial load times by 90% by compressing media and
              reducing HTTP requests.
            </li>
            <li>
              Created a reusable PayPal donation widget that links to a
              user-friendly donation interface.
            </li>
            <li>
              Added an events page that displays upcoming events that are
              created by HEF event organizers.
            </li>
            <li>
              Working to create custom forms that allow attendees to sign up for
              events on directly from the HEF website.
            </li>
            <li>Working to further improve website performance.</li>
          </ul>
        </article>
        <article>
          <h3>Web Developer</h3>
          <h4>Chaga Midwest, Belle Plaine, MN</h4>
          <p>
            Chaga Midwest is a small dietary supplement company that sells
            immune health supplements made from 100% wild-harvested Chaga. I
            developed their static website into a dynamic e-commerce
            application.
          </p>
          <ul>
            <li>
              Redesigned the chagamidwest.com website using HTML, CSS,
              JavaScript, and PHP using WordPress as the CMS.
            </li>
            <li>
              Implemented a robust e-commerce system using the WooCommerce
              platform.
            </li>
            <li>
              Optimized web and mobile site performance by using gzip and image
              compression, caching, and minifying JS/CSS.
            </li>
            <li>
              Improved Search Engine Optimization by migrating to HTTPS,
              decreasing page load times, updating content, and creating
              sitemaps, Google Search Console.
            </li>
            <li>
              Provided technical support to customers and taught owner how to
              use WordPress.
            </li>
            <li>Significantly increased web traffic and online sales.</li>
          </ul>
        </article>
      </Block>

      <Block title="Skills">
        <h4>Primary Technologies</h4>
        <p>HTML5, CSS3, JavaScript (ES5, ES6), React, NodeJS, Git</p>
        <h4>Languages</h4>
        <p>JavaScript, Python, PHP</p>
        <h4>Libraries</h4>
        <p>React, Redux, jQuery, RxJS</p>
        <h4>Frameworks</h4>
        <p>React Native, Express, Flask, Jest</p>
        <h4>Backend</h4>
        <p>Backend: NodeJS, MongoDB, SQL, WordPress</p>
        <h4>Other</h4>
        <p>Webpack, Gulp, Git, npm, yarn, bash, AJAX, JSON, XML, Adobe XD, Sketch</p>
      </Block>

      <Block title="Education">
        <h4>Associates of Science in Computer Science</h4>
        <p>Normandale Community College, Bloomington, MN</p>
        <h4>Front-End Development Certificate</h4>
        <p>
          <a href="https://www.freecodecamp.org/reillym">Free Code Camp</a>
        </p>
        <h4>
          Web Developer Bootcamp & Learn and Understand NodeJS Certificate
        </h4>
        <p>
          <a href="https://www.udemy.com/user/mike-r/">Udemy</a>
        </p>
        <h4>Web Development Courses</h4>
        <p>
          <a href="https://app.pluralsight.com/profile/michael-reilly52">
            Pluralsight
          </a>
        </p>
        <h4> Web Development, Design Patterns and Algorithms</h4>
        <p>Udacity</p>
        <h4>Front End Development Workshops</h4>
        <p>Frontend Masters</p>
      </Block>
    </Wrapper>
  </div>
);
