import React from 'react'
import { useState, useEffect } from 'react';
export default function ScrollButton() {

      const [showButton, setShowButton] = useState(false);
    const up = require('../assets/up.png')
      useEffect(() => {
        function handleScroll() {
          if (window.pageYOffset > 200) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
      return (
        <button
          onClick={handleClick}
          style={{
            borderRadius: 25,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: showButton ? 'block' : 'none',
          }}
        >
          <img src={up} style={{height: 30}}/>
        </button>
      );
    }