import React from 'react';
import s from './Options.module.css';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={s.button}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback('reset')}>Reset</button>
      )}
    </div>
  );
}

export default Options;
