import React, { useState, useEffect, useRef } from 'react';

export default function Product() {
  const [imageSrc, setImageSrc] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (imageSrc) {
      inputRef.current.value = null;
    }
  }, [imageSrc]);

  const handleInputChange = (event) => {
    const selectedFile = event.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
       setImageSrc(objectUrl);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
        <h1>React useEffect Hooks Functions:</h1>
     <img src={imageSrc} alt="selected" widhth="250" height="350"/>
      <br></br>
      <button onClick={handleButtonClick}>Change Image</button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
    </div>
  );
}