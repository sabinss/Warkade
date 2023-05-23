import React from 'react';

import './ui.scss';

interface IButton {
  name: string;
  styles?: any;
}

export const Button = ({ name, styles = null }: IButton) => {
  return <button style={styles}>{name}</button>;
};
