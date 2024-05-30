import React, { FC, useEffect } from 'react';
import styles from "./RailText.module.scss"

import gsap from 'gsap'

interface Props {
  text: string;
	orientation?: string;
	position?: string;
}

const RailText: FC<Props> = ({ 
	text,
	orientation,
	position = "relative"
 }) => {

	// const railClass = ``

	// useEffect(() => {
	// 	const tl = gsap.timeline()
	
	// 	tl.to('.railtext__text', {
	// 		duration: 1,
	// 		x: 100,
	// 		ease: 'power2.out',
	// 		scrollTrigger: {
	// 			trigger: '.example',
	// 			start: 'top 50%',
	// 			end: 'bottom 50%',
	// 			scrub: true,
	// 		},
	// 	})
	// }, [])

  return (
		<div className={`${styles.railtext} ${orientation === "horizontal" ? styles.railtext__horizontal : styles.railtext__vertical}`}>
			<div className="">
				<span className={styles.railtext__text}>{text}</span>
				<span className={styles.railtext__text}>{text}</span>
				<span className={styles.railtext__text}>{text}</span>
				<span className={styles.railtext__text}>{text}</span>
				<span className={styles.railtext__text}>{text}</span>
			</div>
		</div>
	);
};

export default RailText;