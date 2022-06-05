import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time:new Date()}
        this.timer;
    }
    componentDidMount(){
        this.timer = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick = () => {
        const time = new Date()
        this.setState({time})
    }
    
    render() {
        // const { n1, n2, result } = this.state;
        return (
            <div>
                <h1>Clock</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                <h2>{this.state.time.toLocaleDateString()}</h2>
                {/* <h1>{result}</h1>
                <input onChange={this.setN1} value={n1} />
                <input onChange={this.setN2} value={n2} />
                <button onClick={this.clear}>Clear</button>
                <br />
                <button onClick={this.add}>add</button>
                <button onClick={this.sub}>minus</button>
                <button onClick={this.mult}>times</button>
                <button onClick={this.div}>divide</button> */}
            </div>
        );
    }
}

export default Clock;