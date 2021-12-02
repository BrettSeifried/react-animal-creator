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
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
  const [phraseCount, setPhraseList] = useState([]);

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
          headCount,
          setHeadCount,
          legsCount,
          setLegsCount,
          bodyCount,
          setBodyCount,
          setPhraseList,
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
          headCount,
          setHeadCount,
          legsCount,
          setLegsCount,
          bodyCount,
          setBodyCount,
          setPhraseList,
        }}
      />
      {!!headCount && <p> You have changed heads {headCount} times.</p>}
      {!!bodyCount && <p> You have changed shirts {bodyCount} times.</p>}
      {!!legsCount && <p> You have changed pants {legsCount} times.</p>}
      {!!phraseCount && <p> Your Name is {phraseCount}!</p>}
      {!!phraseCount && <p> Your Name is {phraseCount}!</p>}
    </main>
  );
}
