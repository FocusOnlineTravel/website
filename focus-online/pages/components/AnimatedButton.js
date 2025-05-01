import React, { useState } from 'react';

const AnimatedButton = ({ text = "Read More", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button onClick={onClick}
      className="relative flex items-center overflow-hidden rounded-full bg-golden-dark text-white font-medium transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circle that expands to fill button */}
      <div 
        className={`absolute right-0 rounded-full bg-storm-dark transition-all duration-500 ease-out`}
        style={{
          width: isHovered ? '100%' : '2rem',
          height: isHovered ? '100%' : '2rem'
        }}
      ></div>
      
      {/* Button text */}
      <span className={`relative z-10 px-4 py-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white'}`}>
        {text}
      </span>
      
      {/* Arrow container */}
      <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-storm text-white">
        {/* Arrow that changes direction */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 transition-transform duration-300"
          style={{
            transform: isHovered ? 'rotate(0deg)' : 'rotate(45deg)'
          }}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  );
};

export default AnimatedButton;