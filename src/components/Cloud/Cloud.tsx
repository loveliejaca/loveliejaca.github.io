'use client';

import React, { useEffect, FC } from 'react';
import styles from './Cloud.module.scss';
import { gsap } from 'gsap';

interface Props {
  color?: string;
}

const Cloud: FC<Props> = ({ color }) => {
	const getStyle = () => {
    if (color) {
      return { color: color, backgroundColor: color };
    } else {
      return;
    }
  };

	useEffect(() => {
		const cloudTL = gsap.timeline();

		cloudTL
		.set(".cloud-1", { autoAlpha: 0, y: 100 })
		.set(".cloud-2", { autoAlpha: 0, y: 100 })
		.set(".cloud-3", { autoAlpha: 0, y: 100 })
		.to(
			'.cloud-1',
			{
				autoAlpha: 1,  
				y: 0,
				ease: "power2.out", 
				duration: 1, 
				delay: 1
			}
		)
		.to(
			'.cloud-3',
			{ 
				autoAlpha: 1,  
				y: 0,
				ease: "power2.out", 
				duration: 1,
			},
			">-0.9"
		)
		.to(
			'.cloud-2',
			{ 
				autoAlpha: 1,  
				y: 0,
				ease: "power2.out", 
				duration: 1,
			},
			">-0.7"
		)
	}, []);

  return (
		<div className={styles.cloud}>
			{[...Array(3)].map((_, i) => (
				<span key={i} className={`cloud-${i+1} ${styles.cloud__circle}`} style={getStyle()}></span>
			))}
		</div>
	);
};

export default Cloud;