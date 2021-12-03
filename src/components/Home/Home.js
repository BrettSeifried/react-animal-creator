import React from 'react';
import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Home.css';
import bg from '../../background.png';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [phrase, setPhrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
  const [phraseList, setPhraseList] = useState([]);
  // const [phraseCount, setPhraseCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${bg})` }}>
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
          phraseList,
          // phraseCount,
          // setPhraseCount,
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
          phraseList,
          // phraseCount,
          // setPhraseCount,
        }}
      />
      <div className="results">
        {!!headCount && <p> You have changed heads {headCount} times.</p>}
        {!!bodyCount && <p> You have changed shirts {bodyCount} times.</p>}
        {!!legsCount && <p> You have changed pants {legsCount} times.</p>}
        {!!phraseList && (
          <p>
            Your Catch Phrases were:
            {phraseList.map((elem) => (
              <p key={elem}>{elem}</p>
            ))}
          </p>
        )}
      </div>
    </main>
  );
}
