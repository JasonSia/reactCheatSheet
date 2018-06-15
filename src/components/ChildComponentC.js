import React, { Component } from 'react';

export default class ChildComponentC extends Component {

    constructor(props){
        super();
        this.state={
            localChildCValue: 3,
            text:'Untitled'

        };
    }

    incrementLocalChildValue(){
        this.setState({localChildCValue: this.state.localChildCValue + 1})
    }

    decrementLocalChildValue(){
        this.setState({localChildCValue: this.state.localChildCValue - 1})
    }



    render(){
        let identity = this.props.identity;
        let myStyle = {color:'red'};

        return <div style={myStyle}>
            <h4>
                Child Component <br/>
                Identity is: {identity}</h4>

            <h4>local child value: {this.state.localChildCValue}</h4>
            <button onClick = {this.incrementLocalChildValue.bind(this)}>increment child value</button>
            <button onClick = {this.decrementLocalChildValue.bind(this)}>decrement child value</button>

            <input type = 'textArea' onChange={e => this.setState({ text : e.target.value })}></input>
            <div>Your Text: {this.state.text}</div>
        </div>
    }
}