import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import "./Experience.css";
import {FaReact, FaHtml5, FaGitAlt, FaJava} from 'react-icons/fa';
import {SiJavascript, SiTypescript, SiCss3, SiSpringboot, SiCplusplus} from 'react-icons/si';
import {MdHttp} from 'react-icons/md';
import {TbBrandNextjs} from 'react-icons/tb';


const Experience = () => {
  return (
    <section id='experience'>
        <h5>Technology Stack</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Front End</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>React.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
    <FaFigma className='experience__details-icon' /> {/* Replace MdHttp with FaFigma */}
    <div className='experience__details-name'>
        <h4>FIGMA</h4>
    </div>
</article>
                    <article className='experience__details'>
                        <FaHtml5 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>HTML</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiCss3 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>CSS</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaGitAlt className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Git</h4>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience__backend">
            <h3>Back End</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaJava className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Java</h4>
                        </div>
                    </article>
                    
                    <article className='experience__details'>
                        <TbBrandNextjs className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Next.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
    <FaDatabase className='experience__details-icon' /> {/* Replace MdHttp with FaDatabase */}
    <div className='experience__details-name'>
        <h4>MONGODB</h4>
    </div>
</article>
                              
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;