'use client';
import React  from 'react';
import gsap from 'gsap';
import styles from './Particles.module.scss'
import { useGSAP } from '@gsap/react';

const Particles = () => {
	useGSAP(() => {
			const particleTL = gsap.timeline();

		particleTL
		.set('.particle', { autoAlpha: 0 })
		.to(
			'.particle',
			{
				autoAlpha: 1, 
				duration: 1,
				ease: "power2.out", 
				delay: .5,
			} 
		)
	});
  return (
		<div className={styles.particle_container}>
			<div className={`particle ${styles.particle}`}>
				{[...Array(100)].map((_, i) => (
					<span key={i}></span>
				))}
			</div>
		</div>
	);
};

export default Particles;