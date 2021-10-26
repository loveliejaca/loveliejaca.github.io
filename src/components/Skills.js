import React from "react"

const Skills = () => {

  let skillList = [
    {
      skill: 'HTML',
      level: 9,
    },
    {
      skill: 'CSS || SCSS',
      level: 9,
    },
    {
      skill: 'WORDPRESS',
      level: 9,
    }
  ];

  return (
    <section className="l-section skills">
      <div className="l-container">
        <h2 className="cmn-heading cmn-heading-skill"><span>Skills</span></h2>


        <ul className="skill-list">
        {
          skillList.map((item, index) => {
            return (
              <li className="skill-item" key={index}>
                <span className="skill-txt">{item.skill}</span>
              </li>
            )
          })
        }

        </ul>
      </div>

    </section>
  )
}

export default Skills
