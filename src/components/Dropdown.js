import React, { useRef } from 'react';
import { getRandomId } from '../utilities';

export default function Dropdown({ className, text, children }) {
  const dropdownElement = useRef();
  const dropdownId = getRandomId();
  return (
    <div ref={dropdownElement} className='dropdown'>
      <div className='dropdown-trigger'>
        <button
          className={className}
          onClick={() => dropdownElement.current.classList.toggle('is-active')}
          aria-haspopup='true'
          aria-controls={`dropdown-menu-${dropdownId}`}
        >
          {text}
        </button>
      </div>
      <div className='dropdown-menu' id={`dropdown-menu-${dropdownId}`} role='menu'>
        <div className='dropdown-content'>{children}</div>
      </div>
    </div>
  );
}
