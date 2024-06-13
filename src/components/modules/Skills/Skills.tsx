// 'use client';
import React, { FC } from 'react';
import styles from './Skills.module.scss';
import Heading from '../../elements/Heading/Heading';
import { 
	HtmlIcon, 
	CssIcon, 
	JavascriptIcon, 
	ReactIcon, 
	TypescriptIcon,
	SassIcon,
	WordpressIcon,
	YextIcon,
	GitIcon,
	PhotoshopIcon
} from '@/svg/SvgIcons';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IsvgSkillIcons {
	html: React.JSX.Element;
	css: React.JSX.Element;
	scss: React.JSX.Element;
	javascript: React.JSX.Element;
	reactjs: React.JSX.Element;
	typescript: React.JSX.Element;
	yext: React.JSX.Element;
	wordpress: React.JSX.Element;
	git: React.JSX.Element;
	photoshop: React.JSX.Element;
}

type skillsType = keyof IsvgSkillIcons;

interface IskillField {
	id: string;
	fields: {
		skills: string;
		id: string;
		num: number;
	}
}

interface Props {
  skills?: IskillField[];
}

const svgSkillIcons: IsvgSkillIcons = {
	html: <HtmlIcon />,
	css: <CssIcon/>,
	scss: <SassIcon/>,
	javascript: <JavascriptIcon/>,
	reactjs: <ReactIcon/>,
	typescript: <TypescriptIcon/>,
	yext: <YextIcon/>,
	wordpress: <WordpressIcon/>,
	git: <GitIcon/>,
	photoshop: <PhotoshopIcon/>
}

const Skills: FC<Props> = ({ skills }) => {

  return (
		<section className={styles.skills}>
			<Heading>
				<h2>Skills</h2>
			</Heading>
			<div className={styles.skills__list}>
				{skills && skills?.map((data:IskillField) => {
					const skill = data.fields.skills
					const svgKey = skill.toLowerCase() as skillsType;

					const iconModifier = `skills__icon_${svgKey}`
					return (
						<div key={data.id} className={styles.skills__item}>
							<div className={`${styles.skills__icon} ${styles[iconModifier]}`}>
								{svgSkillIcons[svgKey]}
							</div>
							<p>{skill}</p>
					</div>
					)
				})}
			</div>
		</section>
	);
};

export default Skills;