'use client';
import React, { useRef, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { LjLogo } from '@/svg/SvgIcons';
import { gsap } from 'gsap';

const Header = () => {
	const navRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLButtonElement>(null);
	const [isOpen, SetIsOpen] = useState(false);
	const lalal = useRef();

	useEffect(() => {
		const menuBar = gsap.timeline();
		
			if (isOpen) {
				menuBar
				.to(
					".menu-bar-1",
					{ duration: 0.5, rotation: -45, y: 11, ease: "power4.in" }
				)
				.to(
					".menu-bar-3",
					{ duration: 0.5, rotation: 45, y: -13, ease: "power4.in" },  '-=0.5'
				)
				.to(
					".menu-bar-2",
					{ duration: 0.5, x: 30, autoAlpha: 0, ease: "power2.in" },  '-=0.5'
				)
				.to(
					".menu-nav",
					{ duration: 0.8, x: 0, ease: "power4.in"}, '-=0.5'
				);
			} else {
				menuBar
				.to(
					".menu-bar-1",
					{ duration: 0.5, rotation: 0, y: 0, ease: "power4.in" }
				)
				.to(
					".menu-bar-2",
					{ duration: 0.5, x: 0, autoAlpha: 1, ease: "power4.in" },  '-=0.5'
				)
				.to(
					".menu-bar-3",
					{ duration: 0.5, rotation: 0, y: 0, ease: "power4.in" },  '-=0.5'
				)
				.to(
					".menu-nav",
					{ duration: 0.8, x: "100%", ease: "power4.in"}, '-=0.5'
				);
			}
		
		return () => {
			menuBar.kill();
		};

	}, [isOpen])

	const handleClickMenu = () => {
		SetIsOpen(!isOpen);
	}

  return (
		<header className={styles.header}>
			<button onClick={handleClickMenu} ref={menuRef} type="button" aria-label="menu" className={`${styles.hamburger} menu-icon`}>
				<span className="menu-bar menu-bar-1"></span>
				<span className="menu-bar menu-bar-2"></span>
				<span className="menu-bar menu-bar-3"></span>
			</button>
			<div className={styles.menu}>
			
				<nav ref={navRef} className="menu-nav">
					<a href="/about">About</a>
					<a href="">Skills</a>
					<a href="/projects">Projects</a>
					<a href="">Contact</a>
				</nav>
			</div>
			<a href="/" className={styles.logo}>
				<LjLogo/>
			</a>
		</header>
	);
};

export default Header;