import React, { useEffect, useState } from 'react';
import {GrLinkTop} from 'react-icons/gr'

const ScrollToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="button-top"
      className={`fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow ${
        isScrolled ? '' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <GrLinkTop />
    </button>
  );
};

export default ScrollToTopButton;
