import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="StatisticsValue">
      <li className="itemGood">Good: {good}</li>
      <li className="itemNeutral">Neutral: {neutral}</li>
      <li className="itemBad">Bad: {bad}</li>
      <li className="itemBad">Total: {total}</li>
      <li className="itemBad">Percentage: {positivePercentage}%</li>
    </ul>
  );
};
