import React from 'react';
import styles from './about.module.scss'
import Image from 'next/image';

//components import
import PageLayout from '../../components/modules/PageLayout/PageLayout';

import type { Metadata } from 'next'
import Heading from '@/components/elements/Heading/Heading';

export const metadata: Metadata = {
  title: 'About',
  description: '',
}
 

const About = () => {
  
  const data = {
    name: "Lovely Jaca",
    email: "jlablab@gmail.com",
    location: "Cebu City",
    bio: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
  return (
    <PageLayout>
      <div className={styles.about}>
        <section className={styles.about__section}>
          <Heading>
            <h1>About Me</h1>
          </Heading>

          <div className={styles.about__content}>
            <div className={styles.about__dtl}>
              <div className={styles.about__dtl_img}>
              
              </div>

              <div className={styles.about__dtl_content}>
                <div className={styles.about__dtl_content_item}>
                  <span className={styles.about__dtl_content_label}>
                    Full Name
                  </span>
                  <span className={styles.about__dtl_content_value}>
                    {data.name}
                  </span>
                </div>
                <div className={styles.about__dtl_content_item}>
                  <span className={styles.about__dtl_content_label}>
                    E-Mail
                  </span>
                  <span className={styles.about__dtl_content_value}>
                    {data.email}
                  </span>
                </div>

                <div className={styles.about__dtl_content_item}>
                  <span className={styles.about__dtl_content_label}>
                    Location
                  </span>
                  <span className={styles.about__dtl_content_value}>
                    {data.location}
                  </span>
                </div>
              </div>
            </div>
            <p className={styles.about__bio}>{data.bio}</p>
          </div>
        </section>

        <section className={styles.about__section}>
          <Heading>
            <h2>Interest</h2>
          </Heading>
        </section>
        
        <div className={styles.about__accent}>
        <img src="/assets/celestial.svg" alt="sun moon" />
        </div>
      </div>
    </PageLayout>
	);
};

export default About;