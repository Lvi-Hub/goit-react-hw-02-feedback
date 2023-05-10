import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    console.log('Button Good');
  };

  handlNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
    console.log('Button Neutral');
  };

  handlBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    console.log('Button Bad');
  };

  countTotalFeedback({ good, neutral, bad }) {
    const total = good + neutral + bad;
    console.log(good);
    return total;
  }

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    const percentage = Math.round((100 * good) / (good + neutral + bad)) || 0;
    console.log(percentage);
    return percentage;
  }

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <ul className={css.Statistics}>
          <li className={css.StatisticsItem}>
            <button type="button" onClick={this.handlGood}>
              Good
            </button>
          </li>
          <li className={css.StatisticsItem}>
            <button type="button" onClick={this.handlNeutral}>
              Neutral
            </button>
          </li>
          <li className={css.StatisticsItem}>
            <button type="button" onClick={this.handlBad}>
              Bad
            </button>
          </li>
        </ul>
        <ul className="StatisticsValue">
          <li className="itemGood">Good: {this.state.good}</li>
          <li className="itemNeutral">Neutral: {this.state.neutral}</li>
          <li className="itemBad">Bad: {this.state.bad}</li>
          <li className="itemBad">
            Total: {this.countTotalFeedback(this.state)}
          </li>
          <li className="itemBad">
            Percentage: {this.countPositiveFeedbackPercentage(this.state)}%
          </li>
        </ul>
      </div>
    );
  }
}
