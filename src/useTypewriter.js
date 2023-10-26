import { useState, useEffect } from 'react';
const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      let typingInterval;
  
      if (currentIndex < text.length) {
        typingInterval = setInterval(() => {
          setDisplayText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, speed);
      }
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [currentIndex, speed, text]);
  
    return displayText;
  };
  export default useTypewriter;