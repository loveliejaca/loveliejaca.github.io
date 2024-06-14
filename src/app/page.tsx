import React from 'react';
import styles from './page.module.scss';

//components import
import PageLayout from '../components/modules/PageLayout/PageLayout';
import Hero from '../components/modules/Hero/Hero';
import ContactUs from '../components/modules/ContactUs/ContactUs';
import Skills from '../components/modules/Skills/Skills';


import type { Metadata } from 'next'
import getSkills from '@/api/getSkills';
import getUser from '@/api/getUser';
import Particles from '@/components/elements/Particles/Particles';
// import { getUser, getSkills } from '@/api/airtable';
 
export const metadata: Metadata = {
  title: 'Lovely - Portfolio',
  description: 'Portfolio',
}
 
const Home = async () => {
  const dataSkills = await getSkills();
  const userList = await getUser();

  const dataUser = userList && userList.find((field:any) => field.fields.id === 'lovely-jaca');
  
  const dataHero = {
    hero_heading: dataUser?.fields.hero_heading,
    hero_description: dataUser?.fields.hero_description,
    position: dataUser?.fields.position
  }
  const dataContact = {
    location: dataUser?.fields.location,
    email: dataUser?.fields.email
  }

  return (
    <PageLayout>
      <Hero data={dataHero}/>
      <Skills skills={dataSkills}/>
      <ContactUs data={dataContact}/>
      <Particles/>
    </PageLayout>
	);
};

export default Home;