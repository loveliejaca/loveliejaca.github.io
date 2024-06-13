import React from 'react';
import styles from './Footer.module.scss'
import { LjLogo } from '@/svg/SvgIcons';

const Footer = () => {
  return (
		<footer className={styles.footer}>
			<div className={styles.footer__inner}>
				<div className={styles.footer__logo}>
					<LjLogo/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;