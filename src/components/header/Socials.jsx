import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/angelo-ponce-507a2b32b/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/Angelosaniega?tab=overview&from=2024-09-01&to=2024-09-30" target='_blank'><BsGithub/></a>
       <a href="https://www.facebook.com/Charlessraymonsaldonido/" target="_blank"><BsFacebook /></a>
       <a href="https://www.instagram.com/angelosaniega/" target="_blank"><BsInstagram /></a>
    </div>
  );
}

export default Socials; 