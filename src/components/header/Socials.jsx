import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/angelo-ponce-507a2b32b/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/Angelosaniega?tab=overview&from=2024-09-01&to=2024-09-30" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;