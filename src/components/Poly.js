import React from 'react';
import styled from 'styled-components';

const Polygon = styled.svg`
  transform: scale(0.9);
`;

export default () => (
  <Polygon version="1.1" className="shape-reference" xmlns="http://www.w3.org/2000/svg" width="300" height="600">
    <defs>
      <filter id="blur-8">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
      </filter>
      <filter id="blur-6">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
      </filter>
      <filter id="blur-4">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
      </filter>
    </defs>
    <g id="color-block">
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#4ea1ba" stroke="#4ea1ba" strokeWidth="0.6" points="95,371 40,277 112,298" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#3d7587" stroke="#3d7587" strokeWidth="0.6" points="95,371 112,298 125,344" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#2f5361" stroke="#2f5361" strokeWidth="0.6" points="159,411 95,371 125,344" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#2b4f5c" stroke="#2b4f5c" strokeWidth="0.6" points="159,411 103,411 95,371" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#1e323a" stroke="#1e323a" strokeWidth="0.6" points="158,480 103,411 159,411" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#182930" stroke="#182930" strokeWidth="0.6" points="146,504 103,411 158,480" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#0d1012" stroke="#0d1012" strokeWidth="0.6" points="146,504 158,480 218,512" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#07080a" stroke="#07080a" strokeWidth="0.6" points="176,579 146,504 218,512" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#13191e" stroke="#13191e" strokeWidth="0.6" points="158,480 206,426 218,512" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#161a1f" stroke="#161a1f" strokeWidth="0.6" points="158,480 159,411 206,426" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#1c2026" stroke="#1c2026" strokeWidth="0.6" points="159,411 178,337 206,426" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#293d46" stroke="#293d46" strokeWidth="0.6" points="159,411 125,344 178,337" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#314e5a" stroke="#314e5a" strokeWidth="0.6" points="125,344 139,308 178,337" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#3c6c7e" stroke="#3c6c7e" strokeWidth="0.6" points="125,344 112,298 139,308" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#4e707e" stroke="#4e707e" strokeWidth="0.6" points="139,308 112,298 165,238" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#3f4851" stroke="#3f4851" strokeWidth="0.6" points="214,303 139,308 165,238" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#282d36" stroke="#282d36" strokeWidth="0.6" points="178,337 139,308 214,303" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#324f5b" stroke="#324f5b" strokeWidth="0.6" points="178,337 214,303 243,340" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#29404a" stroke="#29404a" strokeWidth="0.6" points="206,426 178,337 243,340" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#305765" stroke="#305765" strokeWidth="0.6" points="206,426 243,340 256,352" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#2d5461" stroke="#2d5461" strokeWidth="0.6" points="206,426 256,352 263,400" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#1d343c" stroke="#1d343c" strokeWidth="0.6" points="218,512 206,426 263,400" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#417e92" stroke="#417e92" strokeWidth="0.6" points="256,352 243,340 267,309" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#50a8c1" stroke="#50a8c1" strokeWidth="0.6" points="256,352 267,309 319,280" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#6ec4dd" stroke="#6ec4dd" strokeWidth="0.6" points="267,309 295,223 319,280" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#6fadbf" stroke="#6fadbf" strokeWidth="0.6" points="267,309 237,239 295,223" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#528394" stroke="#528394" strokeWidth="0.6" points="214,303 237,239 267,309" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#586c77" stroke="#586c77" strokeWidth="0.6" points="214,303 165,238 237,239" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#6c7d86" stroke="#6c7d86" strokeWidth="0.6" points="237,239 165,238 208,216" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#87a3ad" stroke="#87a3ad" strokeWidth="0.6" points="237,239 208,216 241,164" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#95b9c5" stroke="#95b9c5" strokeWidth="0.6" points="237,239 241,164 275,176" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#8dc0cf" stroke="#8dc0cf" strokeWidth="0.6" points="237,239 275,176 295,223" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#abc9d3" stroke="#abc9d3" strokeWidth="0.6" points="241,164 244,144 275,176" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#abbfc5" stroke="#abbfc5" strokeWidth="0.6" points="241,164 196,154 244,144" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#97a9b1" stroke="#97a9b1" strokeWidth="0.6" points="208,216 196,154 241,164" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#8c9297" stroke="#8c9297" strokeWidth="0.6" points="157,185 196,154 208,216" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#a7afb4" stroke="#a7afb4" strokeWidth="0.6" points="196,154 157,185 135,121" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#bbbdbf" stroke="#bbbdbf" strokeWidth="0.6" points="196,154 135,121 215,104" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#b9c6cb" stroke="#b9c6cb" strokeWidth="0.6" points="196,154 215,104 244,144" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#d1d3d5" stroke="#d1d3d5" strokeWidth="0.6" points="135,121 168,70 215,104" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#d5dde0" stroke="#d5dde0" strokeWidth="0.6" points="135,121 112,100 168,70" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#c5d8de" stroke="#c5d8de" strokeWidth="0.6" points="83,150 112,100 135,121" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#b5ced6" stroke="#b5ced6" strokeWidth="0.6" points="114,168 83,150 135,121" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#aed0da" stroke="#aed0da" strokeWidth="0.6" points="82,166 83,150 114,168" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#a1cedb" stroke="#a1cedb" strokeWidth="0.6" points="114,168 58,217 82,166" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#8cbecd" stroke="#8cbecd" strokeWidth="0.6" points="103,248 58,217 114,168" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#7cc7dd" stroke="#7cc7dd" strokeWidth="0.6" points="40,277 58,217 103,248" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#65adc3" stroke="#65adc3" strokeWidth="0.6" points="40,277 103,248 112,298" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#608897" stroke="#608897" strokeWidth="0.6" points="112,298 103,248 165,238" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#768f99" stroke="#768f99" strokeWidth="0.6" points="103,248 157,185 165,238" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#8daab5" stroke="#8daab5" strokeWidth="0.6" points="103,248 114,168 157,185" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#a8bac1" stroke="#a8bac1" strokeWidth="0.6" points="157,185 114,168 135,121" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#757a7f" stroke="#757a7f" strokeWidth="0.6" points="165,238 157,185 208,216" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#e8ebec" stroke="#e8ebec" strokeWidth="0.6" points="168,70 112,100 176,40" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#e6e7e8" stroke="#e6e7e8" strokeWidth="0.6" points="168,70 176,40 215,104" />
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#3f7588" stroke="#3f7588" strokeWidth="0.6" points="243,340 214,303 267,309" />
    </g>
  </Polygon>
);
