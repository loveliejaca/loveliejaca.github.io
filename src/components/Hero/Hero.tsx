'use client';
import React, { FC, useEffect } from 'react';
import styles from './Hero.module.scss';

import Particles from '../Particles/Particles';
import Cloud from '../Cloud/Cloud';

import { gsap } from 'gsap';

interface Props {
	fields: {
	lastname?: string;
	firstname?: string;
	location?: string;
	email?: string;
	position?: string;
	id?: string;
	hero_heading: string;
	hero_description: string;
	}
}
const Hero:FC<Props> = ({ fields }) => {
	useEffect(() => {
	const tl = gsap.timeline();

	tl
		.set(".circle", { autoAlpha: 0 })
		.set(".heading-text", { yPercent: 100, autoAlpha: 1 })
		.set(".position-text", { yPercent: 100, autoAlpha: 1 })
		.set(".description-text", { yPercent: 100, autoAlpha: 1 })
		.to(
			".circle",
			{ 
				autoAlpha: 0,  
				ease: "power1.inOut", 
				duration: 1.2, 
				stagger:{each: 0.15}
			}, 0)
		.to(
			".circle",
			{ 
				autoAlpha: 1, 
				ease: "power1.inOut",
				duration: 1.2,
				stagger:{each: 0.15}
			}, 0.75)
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

	}, []);

	console.log('fields', fields);

	const heading = fields.hero_heading ? fields.hero_heading.split(' ') : [];

	return (
		<section className={styles.hero}>
			<div className={styles.hero__bg}>
				<div className={styles.hero__bg_inner}>
					<div className={`circle ${styles.hero__bg_circle_1}`}></div>
					<div className={`circle ${styles.hero__bg_circle_2}`}></div>
					<div className={`circle ${styles.hero__bg_circle_3}`}></div>
					<div className={`circle ${styles.hero__bg_circle_4}`}></div>
					<div className={`circle ${styles.hero__bg_circle_5}`}></div>
					<div className={`circle ${styles.hero__bg_circle_6}`}></div>
				</div>
			</div>

			<Particles/>
			<Cloud/>

			{/* <div className={styles.telescope}>
			<div className={styles.telescope__container}></div>
			</div> */}

			<div className={styles.hero__content}>
				<h1 aria-label={fields.hero_heading}>
				{heading.map((word:string, index:number) => (
					<span key={index} aria-hidden="true">
						<span className="heading-text-hidden">{word}</span>
						<span className='heading-text'>{word}</span>
					</span>
				))}
				</h1>
				<h2>
					<span aria-hidden="true">{fields.position}</span>
					<span className="position-text">{fields.position}</span>
				</h2>
				<p >
					<span aria-hidden="true">{fields.hero_description}</span>
					<span className="description-text">{fields.hero_description}</span>
				</p>

				<a href="#" className={`button ${styles.hero__button}`}>
					Download CV
				</a>
			</div>
		</section>
	);
};

export default Hero;