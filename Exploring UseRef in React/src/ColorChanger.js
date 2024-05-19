import React, { useRef, useState } from 'react';

const ColorChanger = () => {
  const divRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['lightblue', 'yellow', 'pink', 'green', 'orange'];

  const changeColor = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    divRef.current.style.backgroundColor = colors[nextColorIndex];
    setColorIndex(nextColorIndex);
  };

  return (
    <div
      ref={divRef}
      onClick={changeColor}
      style={{ width: '200px', height: '200px', backgroundColor: colors[colorIndex], cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      
    </div>
  );
};

export default ColorChanger;
