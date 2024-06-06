'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Particles.module.scss'

const Particles = () => {
	useEffect(() => {
		const particleTL = gsap.timeline();

		particleTL
		.set('.particle', { autoAlpha: 0 })
		.to(
			'.particle',
			{
				autoAlpha: 1, 
				duration: 1,
				ease: "power2.out", 
				// stagger: 0.25,
				delay: 2.5,
			} 
		)
	}, [])
  return (
		<div className={styles.particle_container}>
			<div className={`particle ${styles.particle}`}>
				{[...Array(80)].map((_, i) => (
					<span key={i}></span>
				))}
			</div>
		</div>
	);
};

export default Particles;