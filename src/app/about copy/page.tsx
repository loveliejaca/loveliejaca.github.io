import React from 'react';
import styles from './about.module.scss'

//components import
import PageLayout from '../../components/modules/PageLayout/PageLayout';

import type { Metadata } from 'next'
import Cloud from '@/components/Cloud/Cloud';
import Heading from '@/components/Heading/Heading';
 
export const metadata: Metadata = {
  title: 'About',
  description: '',
}
 

const About = () => {
  return (
    <PageLayout>
      <section className={styles.about}>
        <Heading>
          <h1>About Me</h1>
        </Heading>
        <Cloud color="#ef8e73"/>
      </section>
    </PageLayout>
	);
};

export default About;