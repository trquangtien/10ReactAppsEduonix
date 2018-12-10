import React from 'react';

export class QuickQuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Tien'
            },
            {
              id: 'b',
              text: 'Xuan'
            },
            {
              id: 'c',
              text: 'Quynh'
            }
          ],
          correct: 'a'
        },
        {},
        {}
      ]
    };
  }
  render() {
    return <h3>Quick quiz component</h3>;
  }
}
