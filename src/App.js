import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    state = {
        counter: 0
    };

    render() {
        return (
            <div className="App">
                <div>{this.state.counter}</div>
                <button onClick={() => {
                    this.setState({counter: this.state.counter + 1})
                }}>Inc
                </button>
            </div>
        );
    }
}

export default App;
