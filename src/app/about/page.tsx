import React from 'react';

//components import
import PageLayout from '../../components/PageLayout/PageLayout';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
  description: '',
}
 

const About = () => {
  return (
    <PageLayout>
      <section>
        <h1>Lovely</h1>
      </section>
    </PageLayout>
	);
};

export default About;