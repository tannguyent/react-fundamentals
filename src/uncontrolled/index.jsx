import React from "react";

class UncontrolledInput extends React.Component {
    state = {
        value: this.props.value
    };

    componentDidMount() {
        console.log('UncontrolledInput componentDidMount')
    }

    componentDidUpdate() {
        console.log('UncontrolledInput componentDidUpdate')
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        console.log('UncontrolledInput render')
        return (
            <label>
                Email: <input onChange={this.handleChange} value={this.state.value} />
            </label>
        );
    }
}

class FullyUnControlledInput extends React.Component {
    state = {
        value: this.props.value
    };

    componentDidMount() {
        console.log('FullyUnControlledInput componentDidMount')
    }

    componentDidUpdate() {
        console.log('FullyUnControlledInput componentDidUpdate')
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        console.log('ControlledInput render')
        return (
            <label>
                Email: <input onChange={this.handleChange} value={this.state.value} />
            </label>
        );
    }
}

export default class UncontrolledExample extends React.Component {
    state = {
        id: 1,
        value: 'value'
    };

    resetClick = event => {
        this.setState({ id: this.state.id+1, value: `value-${this.state.id}` });
    };

    render() {
        console.log('UncontrolledExample render')
        return (
            <React.Fragment>
                <span>{this.state.value}</span>
                <button onClick={this.resetClick}>reset</button>
                <UncontrolledInput value={this.state.value}></UncontrolledInput>
                <FullyUnControlledInput key={this.state.id} value={this.state.value}></FullyUnControlledInput>
            </React.Fragment>
        );
    } 
}

