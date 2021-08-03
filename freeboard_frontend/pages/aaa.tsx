import { Component } from "react";

interface IState {
  count: number;
}
export default class AAA extends Component {
  state = {
    count: 1,
  };

  onClickAAA() {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return <button onClick={this.onClickAAA}>클릭</button>;
  }
}
