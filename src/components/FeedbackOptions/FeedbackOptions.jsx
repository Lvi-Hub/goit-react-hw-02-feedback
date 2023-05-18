import React, { Component } from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const keys = Object.keys(this.props.options);

    return (
      <ul className={css.Statistics}>
        {keys.map(option => {
          return (
            <li className={css.StatisticsItem} key={option}>
              <button
                type="button"
                name={option}
                className={css.feedbackBtn}
                onClick={this.props.onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
