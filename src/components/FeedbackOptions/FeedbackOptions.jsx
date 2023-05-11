import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({
  onButtonGood,
  onButtonNeutral,
  onButtonBad,
}) => {
  return (
    <ul className={css.Statistics}>
      <li className={css.StatisticsItem}>
        <button type="button" onClick={onButtonGood}>
          Good
        </button>
      </li>
      <li className={css.StatisticsItem}>
        <button type="button" onClick={onButtonNeutral}>
          Neutral
        </button>
      </li>
      <li className={css.StatisticsItem}>
        <button type="button" onClick={onButtonBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};
