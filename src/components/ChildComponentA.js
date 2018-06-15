import React, { Component } from 'react';

export default class ChildComponentA extends Component {

    constructor(props){
        super();
        this.state={
            localChildAValue: 1,

        };
    }

    incrementLocalChildValue(){
        this.setState({localChildAValue: this.state.localChildAValue + 1})
    }

    decrementLocalChildValue(){
        this.setState({localChildAValue: this.state.localChildAValue - 1})
    }


    render(){
        let goToPageFunction = this.props.goToPage;
        let identity = this.props.identity;
        let myStyle = {color:'blue'};

        return <div style={myStyle}>
            <h4>
                Child Component <br/>
                Identity is: {identity}</h4>

            <button onClick = {()=>goToPageFunction(1)}>Component Jump to A1 </button>
            <button onClick = {()=>goToPageFunction(2)}>Component Jump to A2 </button>
            <button onClick = {()=>goToPageFunction(3)}>Component Jump to B1 </button>
            <button onClick = {()=>goToPageFunction(4)}>Component Jump to B2 </button>

            <h4>local child value: {this.state.localChildAValue}</h4>
            <button onClick = {this.incrementLocalChildValue.bind(this)}>increment child value</button>
            <button onClick = {this.decrementLocalChildValue.bind(this)}>decrement child value</button>

        </div>
    }
}