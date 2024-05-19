import React, { useRef } from 'react';

const DynamicFormInputFocus = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleTabNavigation = (ref) => {
    ref.current.focus();
  };

  return (
    <form>
      <input
        type="text"
        ref={inputRef1}
        placeholder="Input 1"
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            handleTabNavigation(inputRef2);
          }
        }}
      />
      <input
        type="text"
        ref={inputRef2}
        placeholder="Input 2"
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            
          }
        }}
      />
     
    </form>
  );
};

export default DynamicFormInputFocus;
