import React from 'react';
import './Portfolio.css';
import JPMC from '../../assests/apptodos.png';
import ICANON from '../../assests/FIGMADESIGN.PNG';

const projects = [
{ 
    id: 1,
    image: JPMC,
    title: 'To-Do App - MERN Stack.',
    position: 'Integrative Programming',
    date: 'Sep  2024 - Oct  2024',
    description: 'I developed a to-do app using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to add, edit, and delete tasks while keeping track of their progress. I implemented a responsive UI with React, handled back-end logic with Node.js and Express, and managed data using MongoDB for seamless task storage and retrieval..'
},
{ 
    id: 2,
    image: ICANON,
    title: 'FIGMA',
    position: 'UI/UX Designer - Figma Experience',
    date: 'Sep 2023 - Oct 2023',
    description: 'I used Figma to design and prototype user-friendly interfaces for websites and apps. My work included creating wireframes, mockups, and interactive prototypes to ensure a smooth user experience. I collaborated with developers and other team members to bring ideas to life and made sure the designs were both functional and visually appealing. Figmas tools helped me quickly gather feedback and make improvements during the design process. '
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;