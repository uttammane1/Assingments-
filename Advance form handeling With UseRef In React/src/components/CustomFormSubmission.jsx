import React, { useRef } from 'react';

const CustomFormSubmission = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      input1: inputRef.current.value,
     
    };
    
    console.log(formData);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Input" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomFormSubmission;
