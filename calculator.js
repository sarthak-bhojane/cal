import React from 'react';
class Calculator extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 value: ''
 }
 }
 calculate(value) {
 this.setState({ value: eval(value) })
 }
 changeSign(value) {
 let arr = value.split('');
 if (arr[0] === '-') {
 arr.splice(0, 1);
 arr.unshift('+');
 }else if (arr[0] === '+') {
 arr.splice(0, 1);
 arr.unshift('-');
 }else if (arr[0] === '-') {
 arr.splice(0, 1);
 arr.unshift('+');
 }else if (arr[0] === '+') {
 arr.splice(0, 1);
 arr.unshift('-');
 }
 let newVal = arr.join('');
 this.setState({ value: newVal })
 }
 clear() {
 this.setState({ value: '' })
 }
 render() {
 return (
 <React.Fragment>
 <Display value={this.state.value} />
 <Buttons calculate={(value) => this.calculate(value)} changeSign={(value) => this.changeSign(value)} clear={this.clear} />
 </React.Fragment>
 )
 }
 }
 export default Calculator;