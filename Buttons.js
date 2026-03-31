import React from 'react';
class Buttons extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 value: ''
 };
 this.handleClick = this.handleClick.bind(this);
 }
 handleClick = (e) => {
 this.setState({ value: this.state.value + e.target.textContent })
 }
 render() {
 return (
 <div>
 <button onClick={this.handleClick}>7</button>
 <button onClick={this.handleClick}>8</button>
 <button onClick={this.handleClick}>9</button>
 <button onClick={this.handleClick}>/</button>
 <button onClick={this.handleClick}>4</button>
 <button onClick={this.handleClick}>5</button>
 <button onClick={this.handleClick}>6</button>
 <button onClick={this.handleClick}>*</button>
 <button onClick={this.handleClick}>1</button>
 <button onClick={this.handleClick}>2</button>
 <button onClick={this.handleClick}>3</button>
 <button onClick={this.handleClick}>-</button>
 <button onClick={this.handleClick}>0</button>
 <button onClick={this.handleClick}>.</button>
 <button onClick={this.handleClick}>+</button>
 <button onClick={() => this.props.calculate(this.state.value)}> = </button>
 <button onClick={() => this.props.changeSign(this.state.value)}> +/- </button>
 <button onClick={() => this.props.clear()}> C </button>
 </div>
 )
 }
 }
 export default Buttons;