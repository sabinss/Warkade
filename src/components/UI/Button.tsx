import React from 'react';

import './ui.scss';

interface IButton {
  name: string;
  styles?: any;
  className?: string[];
  onClick: () => void;
}

export const Button = ({
  className = [''],
  name,
  styles = null,
  onClick,
}: IButton) => {
  const btnClassName = className.join(' ');
  return (
    <button
      onClick={() => {
        console.log('btn clicked', onClick);
        onClick();
      }}
      className={btnClassName}
      style={styles}
    >
      {name}
    </button>
  );
};
