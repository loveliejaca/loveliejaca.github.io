'use client';
import React, { FC, useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Particles from '../../elements/Particles/Particles';

import { gsap } from 'gsap';
import { Circle } from '@/svg/SvgIcons';
import { useGSAP } from '@gsap/react';

interface Props {
	data: {
		position?: string;
		hero_heading: string;
		hero_description: string;
	}
}
const Hero:FC<Props> = ({ data }) => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl
		.set(".heading-text", { yPercent: 100, autoAlpha: 1 })
		.set(".position-text", { yPercent: 100, autoAlpha: 1 })
		.set(".description-text", { yPercent: 100, autoAlpha: 1 })
		.set(".circle", { autoAlpha: 0 })
		.to(
			".circle",
			{ 
				delay: 0.5,
				autoAlpha: 1,
				ease: "power4.out",
				duration: 0.7,
				stagger: 0.4 
			}, "")
		.to(
			".heading-text",
			{ 
				yPercent: 0,
				ease: "power4.out",
				duration: 0.7,
				stagger:{each: 0.15}
			}, ">-0.1")
		.to(
			".position-text",
			{ 
				yPercent: 0,
				ease: "power2.out",
				duration: 0.6,
			}, ">-0.3")
		.to(
			".description-text",
			{ 
				yPercent: 0,
				ease: "power2.out",
				duration: 0.6,
			}, ">-0.3")
		.to(
			".button",
			{ 
				autoAlpha: 1,
				ease: "power2.out",
				duration: 0.8,
			}, ">"
		)

	}, {scope: containerRef})

	const heading = data.hero_heading ? data.hero_heading.split(' ') : [];

	return (
		<section className={styles.hero} ref={containerRef}>
			<div className={styles.planet}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 905 905" className="">
					<circle className={`circle ${styles.circle_solid}`} cx="455" cy="455" r="220" strokeWidth="1" fill="transparent"/>
					<circle className={`circle circle-dashed ${styles.circle_dashed_2}`} cx="455" cy="455" r="300" strokeWidth="1" fill="transparent"/>
					<circle className={`circle ${styles.circle_solid}`} cx="455" cy="455" r="380" strokeWidth="1" fill="transparent"/>
					<circle className={`circle circle-dashed ${styles.circle_dashed}`} cx="455" cy="455" r="448" strokeWidth="1" fill="transparent"/>
				</svg>
			</div>

			<Particles/>

			<div className={styles.hero__content}>
				<h1 aria-label={data.hero_heading}>
				{heading.map((word:string, index:number) => (
					<span key={index} aria-hidden="true">
						<span className="heading-text-hidden">{word}</span>
						<span className='heading-text'>{word}</span>
					</span>
				))}
				</h1>
				<h2>
					<span aria-hidden="true">{data.position}</span>
					<span className="position-text">{data.position}</span>
				</h2>
				<p >
					<span aria-hidden="true">{data.hero_description}</span>
					<span className="description-text">{data.hero_description}</span>
				</p>

				<a href="#" className={`button ${styles.hero__button}`}>
					Download CV
				</a>
			</div>
		</section>
	);
};

export default Hero;