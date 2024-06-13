import React, { FC } from 'react';
import styles from './Heading.module.scss'

interface Props {
  children: any;
}

const Heading: FC<Props> = ({ children }) => {
  return (
		<div className={styles.heading}>
			{children}
		</div>
	);
};

export default Heading;