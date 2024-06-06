import React from 'react';

//components import
import PageLayout from '../components/PageLayout/PageLayout';
import Hero from '../components/Hero/Hero';
import ContactUs from '../components/ContactUs/ContactUs';
import Skills from '../components/Skills/Skills';


import type { Metadata } from 'next'
import getSkills from '@/api/getSkills';
import getUser from '@/api/getUser';
// import { getUser, getSkills } from '@/api/airtable';
 
export const metadata: Metadata = {
  title: 'Lovely - Portfolio',
  description: 'Portfolio',
}
 
const Home = async () => {
  const dataSkills = await getSkills();
  const userList = await getUser();

  const dataUser = userList && userList.find((field:any) => field.fields.id === 'lovely-jaca');

  console.log('-----', dataUser);
  
  // const heroData = dataHome
  return (
    <PageLayout>
      <Hero fields={dataUser.fields}/>
      <Skills skills={dataSkills}/>
      <ContactUs/>
    </PageLayout>
	);
};

export default Home;