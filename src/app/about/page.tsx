import React from 'react';
import styles from './about.module.scss'

//components import
import PageLayout from '../../components/modules/PageLayout/PageLayout';

import type { Metadata } from 'next'
import Heading from '@/components/elements/Heading/Heading';
import Scorpio from '@/components/elements/Constelation/Scorpio';
import getCode from '@/api/getCode';
import getUser from '@/api/getUser';

export const metadata: Metadata = {
  title: 'About',
  description: '',
}

interface ICodeItem{
	id: string;
  fields: {
    codepen_id: string;
    title: string;
  }
}
 

const About = async () => {
  const dataCode = await getCode();
  const userList = await getUser();
  const dataUser = userList && userList.find((field:any) => field.fields.id === 'lovely-jaca');

  const codeList = dataCode ?? [];

  const data = {
    name: `${dataUser?.fields.firstname} ${dataUser?.fields.lastname}`,
    email: dataUser?.fields.email,
    location: dataUser?.fields.location,
    bio: dataUser?.fields.bio
  }
  
  return (
    <PageLayout>
      <div className={styles.about}>
        <Scorpio/>
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

          <div className={styles.code__list}>
            {codeList.map( (code:ICodeItem) =>(
              <div key={code.fields.codepen_id} className={styles.code__card}>
                <div className={styles.code__card_inner}>
                  <iframe title={code.fields.title} src={`https://codepen.io/jlablab03/embed/${code.fields.codepen_id}?default-tab=result}`} loading="lazy">
                  </iframe>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className={styles.about__accent}>
        <img src="/assets/celestial.svg" alt="sun moon" />
        </div>
      </div>
    </PageLayout>
	);
};

export default About;