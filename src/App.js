import React, { Component } from 'react';
import './App.css';

const HOC = (InnerComponent) => class extends React.Component {
   constructor(){
       super();
       this.state = {
           count: 0
       }
       this.update = this.update.bind(this);
   }
   update() {
       this.setState({count: this.state.count + 1});
   }
   render() {
       return (
           <InnerComponent
               {...this.props}
               {...this.state}
               update={this.update.bind(this)}
           />
       )
   }
};

const Button = HOC((props)=> <button onClick={props.update}>{props.children} - {props.count}</button>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Button</Button>
          <hr/>
        <LabelHOC>Label</LabelHOC>
      </div>
    );
  }
}

class Label extends Component {
    render() {
        return (
            <label onClick={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

const LabelHOC = HOC(Label)
export default App;
