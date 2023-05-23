import React from 'react';

import './ui.scss';

interface IButton {
  name: string;
  styles?: any;
  className?:string[]
}

export const Button = ({className=[''], name, styles = null }: IButton) => {
  const btnClassName = className.join( ' ');
  console.log({btnClassName})   
  return <button className={btnClassName} style={styles}>{name}</button>;
};
