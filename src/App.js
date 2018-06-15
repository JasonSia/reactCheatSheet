import React, { Component } from 'react';
import './resource/App.css'
import ChildComponentA from './components/ChildComponentA';
import ChildComponentB from "./components/ChildComponentB";
import ChildComponentC from "./components/ChildComponentC";

class App extends Component {

    constructor(props){
        super();
        this.state={
          currentPage: 1,
            childCVisible:true
        };
    }

    goToPage(page){
        this.setState({currentPage: page })
    }

    toggleChildC(){
        this.setState({childCVisible: this.state.childCVisible ? false : true })
    }

    getPage(page){
        switch(page){
            case 1:
                return <ChildComponentA goToPage={this.goToPage.bind(this)} identity="A1" />;
            case 2:
                return <ChildComponentA goToPage={this.goToPage.bind(this)} identity="A2" />;
            case 3:
                return <ChildComponentB goToPage={this.goToPage.bind(this)} identity="B1" />;
            case 4:
                return <ChildComponentB goToPage={this.goToPage.bind(this)} identity="B2" />;
            default:
                this.setState({currentPage:1});
                break;
        }

    }

    clicked(){
        console.log("clicked");
        this.setState({currentPage: this.state.currentPage + 1 })
    }


  render() {
    return (
      <div>
          <h1>Parent Component</h1>
          Current Parent Value: {this.state.currentPage}
          <button href="#" onClick = {this.clicked.bind(this)}>Local ++</button>
          <button href="" onClick = {this.toggleChildC.bind(this)}>Toggle Child C</button>
          <hr/>

          {this.getPage(this.state.currentPage)}
          <hr/>

          {this.state.childCVisible? <ChildComponentC identity="C1"/> : '' }


          <div className="main-footer">

              <p>
                  ***<br/>
                  <br/>the purpose of this project is to demo the basic functions and usage in reactjs.
                  <br/>these functionalities includes:
                  <ul>
                      <li>React Component</li>
                      <li>Parent variable state scope</li>
                      <li>Child variable state scope</li>
                      <li>Binding javascript events</li>
                      <li>Passing props into child component</li>
                      <li>Passing states back into parent component</li>
                      <li>React component render only required component
                          (i.e (A1,A2),(B1,B2) share same state,when B is rendered after A is rendered, its state are lost.
                            however, when toggling only between (A1,A2), or (B1,B2) they are still in scope,
                            as no re-rendering is required since they are of the same components.)</li>
                  </ul>
                  <br/>***


              </p>
          </div>
      </div>
    );
  }
}

export default App;
