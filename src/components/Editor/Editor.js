import React from 'react';

import './Editor.css';

export default function Editor({
  head,
  setHead,
  body,
  setBody,
  legs,
  setLegs,
  phrase,
  setPhrase,
  setHeadCount,
  setLegsCount,
  setBodyCount,
  setPhraseList,
  phraseCount,
  setPhraseCount,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    setBodyCount((prevState) => prevState + 1);
  };
  const handleLegs = (e) => {
    setLegs(e.target.value);
    setLegsCount((prevState) => prevState + 1);
  };

  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
    // setPhraseCount((prevState) => prevState + 1);
    // phraseCount('');
  };

  return (
    <div className="editor">
      <div className="form-control">
        <select value={head} name="head" onInput={handleHead}>
          <option value="">Select a Head</option>
          <option value="dog">Dog Head</option>
          <option value="bird">Bird Head</option>
          <option value="duck">Duck Head</option>
          <option value="horse">Horse Head</option>
        </select>
      </div>
      <div className="form-control">
        <select value={body} name="body" onInput={handleBody}>
          <option value="">Select a Body</option>
          <option value="blue">Blue Shirt</option>
          <option value="dress">Pretty Dress</option>
          <option value="pink">Pink Top</option>
          <option value="red">Red Top</option>
        </select>
      </div>
      <div className="form-control">
        <select value={legs} name="legs" onInput={handleLegs}>
          <option value="">Select Pants</option>
          <option value="blue">Blue Pants</option>
          <option value="dog">Dog legs</option>
          <option value="leg">No Pants</option>
          <option value="white">White Pants</option>
        </select>
      </div>
      <div className="form-control">
        <input
          type="text"
          value={phrase}
          onInput={(e) => setPhrase(e.target.value)}
          placeholder="Write a Catch Phrase"
        />
        <button onClick={handleClick}>Submit Phrase</button>
      </div>
    </div>
  );
}
