import React, { FC } from 'react';
import styles from './Heading.module.scss'

interface Props {
  title: string;
}

const Heading: FC<Props> = ({ title }) => {
  return (
		<div className={styles.heading}>
			<h2>{title}</h2>
		</div>
	);
};

export default Heading;