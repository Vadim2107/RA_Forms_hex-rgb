import React from 'react';
import './App.css';
import HexInput from './components/HexInput'

class App extends React.Component {
  constructor(props) {
    super(props);
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

  checkColor(hex) {
      return /^#?([\da-f]{6})$/i.test(hex);
  }

  onChange(evt) {
    const hex = evt.target.value;
    this.setState({ color: hex })
    if (hex.length === 7) {      
      if (this.checkColor(hex)) {
        this.setState({
          isWarning: false,
          result: this.convert(hex)
        })
      } else {
        this.setState({
          isWarning: true,
          result: 'Ошибка!'
        })
      }
    } else if (hex.length !== 7) {
      this.setState({
        isWarning: false,
        result: ''
      })
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
  }
  
  render() {
    const props = {};    
      if (this.state.isWarning) {
        props.className = 'warning';
      } else if (this.state.color.length === 7) {
        props.style = {
          backgroundColor: this.state.color
        };
      }
    
    return (
      <form {...props} onSubmit={this.onSubmit}>
        <HexInput
          value={this.state.color}
          onChange={this.onChange.bind(this)} />
        <div name="result" className="rgb">{this.state.result}</div>
      </form>
    );    
  }
}

export default App;
