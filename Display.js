import React from 'react';
class Display extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 value: props.value
 }
 }
 componentDidUpdate(prevProps) {
 if (prevProps.value !== this.props.value) {
 this.setState({ value: this.props.value })
 }
 }
 render() {
 return (
 <div className='display'>{this.state.value}</div>
 )
 }
 }
 export default Display;