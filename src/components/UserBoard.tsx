import * as React from 'react';
import User from './User';

export default class UserBoard extends React.Component {
  public render() {
    return (
      <div>
        <h1>User Board</h1>
        <User name="Alice" />
        <User name="Bob" />
        <User name="Cheadle" />
      </div>
    );
  }
}
