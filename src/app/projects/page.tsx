import React from 'react';
import styles from './projects.module.scss'

//components import
import PageLayout from '../../components/modules/PageLayout/PageLayout';

import type { Metadata } from 'next'
import Cloud from '@/components/elements/Cloud/Cloud';
import Heading from '@/components/elements/Heading/Heading';
 
export const metadata: Metadata = {
  title: 'Projects',
  description: '',
}
 

const Projects = () => {
  return (
    <PageLayout>
      <section className={styles.projects}>
        <Heading>
          <h1>Projects</h1>
        </Heading>
        <Cloud color="#f5baa6"/>
      </section>
    </PageLayout>
	);
};

export default Projects;