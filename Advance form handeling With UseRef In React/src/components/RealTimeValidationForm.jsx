import React, { useRef, useState } from 'react';

const RealTimeInputValidation = () => {
  const inputRef = useRef(null);
  const [valid, setValid] = useState(true);

  const handleValidation = () => {
    const value = inputRef.current.value;
    if (value.length < 5) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={inputRef}
        placeholder="Input"
        onChange={handleValidation}
        className={valid ? '' : 'invalid'}
      />
      {valid ? null : <span className="error">Input must be at least 5 characters long.</span>}
    </form>
  );
};

export default RealTimeInputValidation;
