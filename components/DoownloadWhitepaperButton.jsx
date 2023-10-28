'use client';
import React from 'react';

const DoownloadWhitepaperButton = ({ text, className }) => {
  const downloadPDF = () => {
    return window.open('/Whitepaper_v1.pdf', '_blank');
  };

  return (
    <button
      className='text-sm underline transition-all duration-200 opacity-70 decoration-2 underline-offset-8 xl:text-base hover:opacity-100'
      onClick={downloadPDF}>
      Whitepaper v1
    </button>
  );
};

export default DoownloadWhitepaperButton;
