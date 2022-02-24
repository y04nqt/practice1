import { useState, } from 'react';
export default function PracticePage() {
  const [titleEnding, setTitleEnding] = useState('');
  return (
    <div>
      <h1>Practice Page {titleEnding}</h1>
      <button onClick={() => setTitleEnding('Updated')}>I update state</button>
    </div>
  );
}