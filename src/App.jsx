import { useState, useEffect } from 'react';
import 'modern-normalize';
import 'nanoid';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(
    () =>
      JSON.parse(localStorage.getItem('feedback')) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback collected yet." />
      )}
    </div>
  );
}

export default App;
