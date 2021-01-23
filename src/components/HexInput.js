import React from 'react';

const HexInput = props => {
  // const { value, onChange } = props;
  function onChange() {    
    props.onChange(this.value);
  }

  // const onChang = () => {
  //   onChange(value);
  // }

  return (
    <input
      value={props.value}      
      onChange={onChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};

export default HexInput;
