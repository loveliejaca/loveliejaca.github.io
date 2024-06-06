'use client';
import React , { useState } from 'react';
import styles from './ContactUs.module.scss'
import Heading from '../Heading/Heading';
import { EmailIcon, LinkedInIcon, LocationIcon } from '@/svg/SvgIcons';

// interface ContactFormProps {
//   name: string;
//   email: string;
//   message: string;
// }

const ContactUs = () => {
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setSubmitted(true);
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });

		setName('');
		setEmail('');
  };
  return (
		<section className={styles.contact}>
			<div className={styles.contact__inner}>
				<div className={styles.contact__social}>
					<Heading title='Contact with me'/>
					<span className={styles.contact__social_line}> </span>

					<div className={styles.contact__email}>
						<a href="https://www.linkedin.com/in/lovely-jaca-76a035297/" target='_blank'>
							<i className={styles.contact__icon}>
								<LinkedInIcon/>
							</i>
							<span>LinkedIn</span>
						</a>
					</div>

					<div className={styles.contact__email}>
						<a href="">
							<i className={styles.contact__icon}>
								<EmailIcon/>
							</i>
							<span>jlablab@gmail.com</span>
						</a>
					</div>

					<div className={styles.contact__number}>
						<a href="">
							<i className={styles.contact__icon}>
								<LocationIcon/>
							</i>
							<span>Cebu City</span>
						</a>
					</div>

				</div>

				<div className={styles.contact__form}>
					<form  onSubmit={handleSubmit}>
						<div className={styles.contact__form__item}>
							<label htmlFor="">Email</label>
							<input id="email" type="email" />
						</div>
						<div className={styles.contact__form__item}>
							<label htmlFor="name">Name</label>
							<input id="name" type="text" />
						</div>
						<div className={styles.contact__form__item}>
							<label htmlFor="message" className="">
								Message
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="appearance-none border rounded w-full h-32 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className={styles.contact__form__item}>
							<button type="submit">Submit</button>
						</div>
					</form>
				</div>
			</div>
			
		</section>
	);
};

export default ContactUs;