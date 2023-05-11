import React, { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handlNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handlBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback({ good, neutral, bad } = this.state) {
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage({ good, neutral, bad } = this.state) {
    const percentage = Math.round((100 * good) / (good + neutral + bad)) || 0;
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {/* <FeedbackOptions options={ } onLeaveFeedback={ } /> */}
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          onButtonGood={this.handlGood}
          onButtonNeutral={this.handlNeutral}
          onButtonBad={this.handlBad}
        />
        {/* </Section> */}

        <Section title={'Statistics'} />
        {/* {console.log(this.countTotalFeedback())} */}
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
        {/* </Section> */}
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Statistics />
//     </div>
//   );
// };
