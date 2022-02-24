import { useState, } from 'react';
import PracticeComponent from '../components/PracticeComponent';

export default function PracticePage() {
  const [titleEnding, setTitleEnding] = useState('');
  return (
    <div>
      <h1>Practice Page {titleEnding}</h1>
      <button data-testid="PracticePageBtn" onClick={() => setTitleEnding('Updated')}>I update state</button>
      <PracticeComponent setTitleEnding={setTitleEnding} />
    </div>
  );
}