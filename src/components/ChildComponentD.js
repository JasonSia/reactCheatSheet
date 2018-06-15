import React, { Component } from 'react';

export default class ChildComponentD extends Component {

    constructor(props){
        super();
    }

    incrementLocalChildValue(){
        this.setState({localChildDValue: this.state.localChildDValue + 1})
    }

    decrementLocalChildValue(){
        this.setState({localChildDValue: this.state.localChildDValue - 1})
    }

    onChange(e){
        let setText = this.props.setText;
        setText(e.target.value);
    }



    render(){
        let identity = this.props.identity;
        let text = this.props.text;
        let myStyle = {color:'pink'};

        return <div style={myStyle}>
            <h4>
                Child Component <br/>
                Identity is: {identity}</h4>

            <input type = 'textArea' onChange={e => this.onChange(e)} value={text}></input>
            <div>Your Text: {text}</div>
        </div>
    }
}