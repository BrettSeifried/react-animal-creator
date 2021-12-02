import React from 'react';
import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [phrase, setPhrase] = useState('');
  //   const [headCount, setHeadCount] = useState(0);
  //   const [bodyCount, setBodyCount] = useState(0);
  //   const [legsCount, setLegsCount] = useState(0);
  //   const [phraseCount, setPhraseCount] = useState(0);

  return (
    <main>
      <Editor
        {...{
          head,
          setHead,
          body,
          setBody,
          legs,
          setLegs,
          phrase,
          setPhrase,
        }}
      />
      <Preview
        {...{
          head,
          setHead,
          body,
          setBody,
          legs,
          setLegs,
          phrase,
          setPhrase,
        }}
      />
    </main>
  );
}
