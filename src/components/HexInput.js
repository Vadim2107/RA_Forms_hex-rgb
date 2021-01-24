import React from 'react';

const HexInput = props => {
  const { value, onChange } = props;  

  return (
    <input
      name="color"
      value={value}      
      onChange={onChange}
      type="text"
      className="hex-field"
      placeholder="#000000" />
  );
};

export default HexInput;
