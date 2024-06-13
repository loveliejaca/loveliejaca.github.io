'use client';
import React , { FC, useEffect, useState } from 'react';
import styles from './ContactUs.module.scss'
import Heading from '../../elements/Heading/Heading';
import { EmailIcon, LinkedInIcon, LocationIcon } from '@/svg/SvgIcons';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utility/send-email';

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
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
	const [labelAnimated, setLabelAnimated] = useState({
    name: false,
    email: false,
    message: false,
  });

	const { handleSubmit } = useForm<FormData>();

	const handleFocus = (inputId: string) => {
		console.log('inputId', inputId);
		
    setLabelAnimated((prevLabelAnimated) => ({
     ...prevLabelAnimated,
      [inputId]: true,
    }));
  };

	const handleBlur = (inputId: string) => {
    if (inputId === 'name' && name.trim() === '') {
      setLabelAnimated((prevLabelAnimated) => ({
       ...prevLabelAnimated,
        [inputId]: false,
      }));
    } else if (inputId === 'email' && email.trim() === '') {
      setLabelAnimated((prevLabelAnimated) => ({
       ...prevLabelAnimated,
        [inputId]: false,
      }));
    } else if (inputId === 'essage' && message.trim() === '') {
      setLabelAnimated((prevLabelAnimated) => ({
       ...prevLabelAnimated,
        [inputId]: false,
      }));
    }
  };

  const onSubmit = (emailData: FormData) => {
    setSubmitted(true);
		console.log('event', emailData);
		
    // Add your form submission logic here
		sendEmail(emailData);
    console.log('Form submitted:', { name, email, message });
  };

	useEffect(() => {
		if (submitted) {
			setName('');
			setEmail('');
		}
	}, [submitted])
	
  return (
		<section className={styles.contact}>
			<div className={styles.contact__inner}>
				<div className={styles.contact__social}>
					<Heading>
						<h2>Contact with me</h2>
					</Heading>
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
							<span>{data.email}</span>
						</a>
					</div>

					<div className={styles.contact__number}>
						<a href="">
							<i className={styles.contact__icon}>
								<LocationIcon/>
							</i>
							<span>{data.location}</span>
						</a>
					</div>

				</div>

				<div className={styles.contact__form}>
					<form  onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.contact__form__item}>
							<label htmlFor="email" className={`${labelAnimated.email? styles.label_animated : ''}`}>Email</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
								// {...register('name', { required: true })}
							/>
						</div>
						<div className={styles.contact__form__item}>
							<label htmlFor="name" className={`${labelAnimated.name? styles.label_animated : ''}`}>Name</label>
							<input 
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
								required
							/>
						</div>
						<div className={styles.contact__form__item}>
							<label htmlFor="message" className={`${labelAnimated.message? styles.label_animated : ''}`}>
								Message
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
								className=""
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