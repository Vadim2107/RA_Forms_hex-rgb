import React from 'react';
import './App.css';
// import HexInput from './components/HexInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isWarning: false,
    //   color: props.color,      
    //   result: this.convert(props.color)
    // };
    this.state = {
      isWarning: false,
      color: "",
      result: ""
    };
  }

  convert(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return null;
    }
    result.shift();
    return result ? `rgb(${result.map(i => parseInt(i, 16)).join(', ')})` : null;
  }

  checkColor(color) {
    // if (this.state.color.length === 7) {
      return /^#?([\da-f]{6})$/i.test(color);
    // }    
  }

  fixColor(color) {    
      // return color[0] === '#' && color;
      return this.state.color[0] === '#' && color;
  }

  onChange(evt) {
    // if (this.state.color.length === 7) {      
      if (this.checkColor(evt)) {
        this.setState({ color: evt.target.value })
        // this.setState({ color: this.fixColor(evt) })
        if (this.state.color.length === 7) {
          this.setState({
            isWarning: false,
            result: this.convert(this.state.color)
          })
        }
      } else {
        this.setState({ color: evt.target.value })
        // this.setState({ color: this.fixColor(evt) })
        if (this.state.color.length === 7) {
          this.setState({
            isWarning: true,
            result: 'Ошибка!'
          })
        }

        // this.setState({
        //   isWarning: true,
        //   color: evt.target.value,
        //   // color: this.fixColor(evt),                    
        //   result: 'Ошибка!'
        // })
      }
    // }
    console.log(this.state.color);
  }

  // onChange(e) {
  //   this.change.bind(this);
  // }

  onSubmit = evt => {
    evt.preventDefault();
    
    console.log(this.state);
    }
  
  
  render() {
    const props = {};
    // if (this.state.color.length === 7) {
      
      if (this.state.isWarning) {
        props.className = 'warning';
      } else {
        props.style = {
          backgroundColor: this.state.color
        };
      }      
    // }
    
    // console.log(props);
    console.log(typeof this.state.color);
    console.log(this.state.color.length); 
    
    
    return (
      <form {...props} onSubmit={this.onSubmit}>
        <input
          name="color"
          value={this.state.color}      
          onChange={this.onChange.bind(this)}
          type="text"
          className="hex-field js-hex-field"
          placeholder="#000000" />
        {/* <HexInput
          value={this.state.color}
          onChange={this.onChange.bind(this)} /> */}
        <div name="result" className="message js-message">{this.state.result}</div>
      </form>
    );    
  }
}

export default App;
