import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
		this.state = {n1:'',n2:'',result:0}
  }

  setN1 = (e) => {
    const n1 = e.target.value ? parseInt(e.target.value) : ''
    this.setState({n1})
  }

  setN2 = (e) => {
    const n2 = e.target.value ? parseInt(e.target.value) : ''
    this.setState({n2})
  }

  clear = (e) => {
    e.preventDefault();
    this.setState({n1:'',n2:'',result:0});
  }

  add = (e) => {
    e.preventDefault();
    const result = this.state.n1 + this.state.n2;
    this.setState({result});
  }

  sub = (e) => {
    e.preventDefault();
    const result = this.state.n1 - this.state.n2;
    this.setState({result});
  }

  mult = (e) => {
    e.preventDefault();
    const result = this.state.n1 * this.state.n2;
    this.setState({result});
  }

  div = (e) => {
    e.preventDefault();
    const result = this.state.n1 / this.state.n2;
    this.setState({result});
  }

  render() {
    const { n1, n2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setN1} value={n1} />
        <input onChange={this.setN2} value={n2} />
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>minus</button>
        <button onClick={this.mult}>times</button>
        <button onClick={this.div}>divide</button>
      </div>
    );
  }
}

export default Calculator;