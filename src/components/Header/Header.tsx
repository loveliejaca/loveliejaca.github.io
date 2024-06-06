import React from 'react';
import styles from './Header.module.scss';
import { LjLogo } from '@/svg/SvgIcons';

const Header = () => {
  return (
		<header className={styles.header}>
			
			<a href="/" className={styles.logo}>
				<LjLogo/>
			</a>
			<div className={styles.menu}>
				<nav>
					<a href="/about">About</a>
					<a href="">Skills</a>
					<a href="">Projects</a>
					<a href="">Contact</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;