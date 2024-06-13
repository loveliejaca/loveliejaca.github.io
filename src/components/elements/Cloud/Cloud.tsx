'use client';

import React, { useEffect, FC } from 'react';
import styles from './Cloud.module.scss';
import { gsap } from 'gsap';

interface Props {
  color?: string;
	isAnimate?: boolean;
}

const Cloud: FC<Props> = ({ color, isAnimate }) => {

	const getStyle = () => {
    if (color) {
      return { color: color, backgroundColor: color };
    } else {
      return;
    }
  };

  return (
		<div className={styles.cloud}>
			{[...Array(3)].map((_, i) => (
				<span key={i} className={`cloud-${i+1} ${styles.cloud__circle}`} style={getStyle()}></span>
			))}
		</div>
	);
};

export default Cloud;