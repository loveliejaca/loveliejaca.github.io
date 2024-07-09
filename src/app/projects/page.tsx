import React from 'react';
import styles from './projects.module.scss'

//components import
import PageLayout from '../../components/modules/PageLayout/PageLayout';

import type { Metadata } from 'next'
import Heading from '@/components/elements/Heading/Heading';
import getProjects from '@/api/getProjects';
 
export const metadata: Metadata = {
  title: 'Projects',
  description: '',
}

interface IProjectItem {
	id: string;
	fields: {
		id: string;
		name: string;
    url: string;
    image: any;
	}
}
 

const Projects = async () => {
  const dataProjects = await getProjects();
  const projectList = dataProjects ?? [];

  return (
    <PageLayout>
      <section className={styles.projects}>
        <Heading>
          <h1>Projects</h1>
        </Heading>

        <div className={styles.projects__list}>
          {projectList.map( (project:IProjectItem) => {
            return (
              <div key={project.fields.id} className={styles.projects__item}>
                  <a className={styles.projects__card_container} href={project.fields.url} target="_blank">

                    <div className={styles.projects__card_front}>
                      <div className={styles.projects__card}>
                        <div className={styles.projects__card_inner}>
                          <div className={styles.projects__card_img}>
                            <span></span>
                            <div className={styles.projects__card_img_circle}></div>
                          </div>
                          <p className={styles.projects__card_name}>
                            {project.fields.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.projects__card_back}>
                      <div className={styles.projects__card}>
                        <div className={styles.projects__card_inner}>
                          <div className={styles.projects__card_img}>
                            <img src={project.fields.image[0]?.url} alt={project.fields.name} />
                          </div>
                          <p className={styles.projects__card_name}>
                            {project.fields.name}
                          </p>
                        </div>
                      </div>
                    </div>

                  </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* <section className={styles.code}>
        <Heading>
          <h2>Lala</h2>
        </Heading>
      </section> */}
    </PageLayout>
	);
};

export default Projects;