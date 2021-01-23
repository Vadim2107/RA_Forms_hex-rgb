import React from 'react';
import './App.css';
// import HexInput from './components/HexInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarning: false,
      color: props.color,      
      result: this.convert(props.color)
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
    return /^#?([\da-f]{6})$/i.test(color);
  }

  fixColor(color) {    
      return color[0] === '#' && color;
  }

  change(color) {
    if (color.length === 7) {      
      if (this.checkColor(color)) {
        color = this.fixColor(color);
        this.setState({
          color,
          isWarning: false,
          result: this.convert(color)
        });
      } else {
        this.setState({
          isWarning: true,
          color: this.fixColor(color),
          result: 'Ошибка!'
        })
      }
    }
    console.log(typeof color);
    console.log(color.type);
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
    if (this.state.isWarning) {
      props.className = 'warning';
    } else {
      props.style = {
        backgroundColor: this.state.color
      };
    }
    // console.log(props);
    console.log(typeof this.state.color);
    
    
    return (
      <form {...props} onSubmit={this.onSubmit}>
        <input
          value={this.state.color}      
          // onChange={this.change.bind(this)}
          type="text"
          className="hex-field js-hex-field"
          placeholder="#000000" />
        {/* <HexInput
          value={this.state.color}
          onChange={this.change.bind(this)} /> */}
        <div className="message js-message">{this.state.result}</div>
      </form>
    );
  }
}

export default App;
