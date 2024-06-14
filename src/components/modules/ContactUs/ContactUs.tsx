'use client';
import React , { FC, useEffect, useState } from 'react';
import styles from './ContactUs.module.scss'
import Heading from '../../elements/Heading/Heading';
import { EmailIcon, LinkedInIcon, LocationIcon } from '@/svg/SvgIcons';


export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface Props {
	data: {
		email?: string;
		location: string;
	}
}

const ContactUs: FC<Props> = ({ data }) => {
	
  return (
		<section className={styles.contact}>
			<div className={styles.contact__inner}>
				<div className={styles.contact__social}>
					<Heading>
						<h2>Contact with me</h2>
					</Heading>

					<div className={styles.contact__list}>
						<div className={styles.contact__item}>
							<a href="https://www.linkedin.com/in/lovely-jaca-76a035297/" target='_blank'>
								<i className={styles.contact__icon}>
									<LinkedInIcon/>
								</i>
								<span>LinkedIn</span>
							</a>
						</div>

						<div className={styles.contact__item}>
							<a href="">
								<i className={styles.contact__icon}>
									<EmailIcon/>
								</i>
								<span>{data.email}</span>
							</a>
						</div>

						<div className={styles.contact__item}>
							<a href="">
								<i className={styles.contact__icon}>
									<LocationIcon/>
								</i>
								<span>{data.location}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sun}></div>
			<div className={styles.moon}>
				<span></span>
				<span></span>
				<span></span>
				<div className={styles.moon__face}></div>
			</div>
		</section>
	);
};

export default ContactUs;