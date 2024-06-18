import React, { FC } from 'react';

import styles from './PageLayout.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Particles from '@/components/elements/Particles/Particles';


interface Props {
  children: any;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
		<>
			<Particles/>
			<Header/>
			<main className={styles.main}>
				{children}
			</main>
			<Footer/>
		</>
	);
};

export default PageLayout;