import React, { Component } from 'react';

export class Section extends Component {
  render() {
    const { title } = this.props;
    return <p>{title}</p>;
  }
}
