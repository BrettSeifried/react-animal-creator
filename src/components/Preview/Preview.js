import React from 'react';

import './Preview.css';

export default function Preview({ head, body, legs, phrase }) {
  return (
    <div className={`preview ${phrase}`}>
      <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}-head.png`} />
      <img alt={body} src={`${process.env.PUBLIC_URL}/assets/${body}-middle.png`} />
      <img alt={legs} src={`${process.env.PUBLIC_URL}/assets/${legs}-pants.png`} />
      <p> {phrase} </p>
    </div>
  );
}
