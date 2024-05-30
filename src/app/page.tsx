import React from 'react';
import styles from "./page.module.scss"
//components import
import PageLayout from '../components/PageLayout/PageLayout';
import RailText from '../components/RailText/RailText';

const Home = () => {
  return (
		<PageLayout>
			<div className="">
        <div className={styles.railtext_container}>
          <RailText text='LOVELY' orientation='veritcal'/>
        </div>
				<h1>Hello world</h1>
			</div>
		</PageLayout>
	);
};

export default Home;