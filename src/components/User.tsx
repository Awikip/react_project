import * as React from 'react';

export interface IUserProps {
  name: string;
}

export interface IPresence {
  present: boolean;
}

export default class User extends React.Component<IUserProps> {
  public state: IPresence = { present: true };
  public render() {
    return (
      <div>
        <p>
          User: <b>{this.props.name}</b> {'\n'}
          {this.props.name} is {!this.state.present ? 'not' : ''} present
        </p>
        <button onClick={this.TogglePresence}>
          {this.state.present ? 'Mark absent' : 'Mark present'}
        </button>
      </div>
    );
  }

  private TogglePresence = () => {
    this.setState({
      presence: !this.state.present,
    });
  };
}
