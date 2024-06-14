import React from 'react';
import styles from './Constelation.module.scss'

const Scorpio = () => {
  return (
		<div className={styles.scorpio}>
			<span className={`${styles.scorpio__small} ${styles.scorpio__star1}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_1}`}></span>

			<span className={`${styles.scorpio__medium} ${styles.scorpio__star2}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_2}`}></span>

			<span className={`${styles.scorpio__small} ${styles.scorpio__star3}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_3}`}></span>

			<span className={`${styles.scorpio__big} ${styles.scorpio__star4}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_4}`}></span>

			<span className={`${styles.scorpio__medium} ${styles.scorpio__star5}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_5}`}></span>

			<span className={`${styles.scorpio__medium} ${styles.scorpio__star6}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_6}`}></span>

			<span className={`${styles.scorpio__small} ${styles.scorpio__star7}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_7}`}></span>
			

			<span className={`${styles.scorpio__small} ${styles.scorpio__star8}`}></span>
			<span className={`${styles.scorpio__line} ${styles.scorpio__line_8}`}></span>

			<span className={`${styles.scorpio__big} ${styles.scorpio__star9}`}></span>

		</div>
	);
};

export default Scorpio;