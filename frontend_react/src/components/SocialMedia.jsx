import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      
      <a href="https://www.linkedin.com/in/lavanya-sharma-3872b8204/"
        className="youtube social">
       <BsLinkedin  />
      </a>
      
    </div>
    <div>
      
    <a href="https://www.facebook.com/lavanya.221022"
        className="youtube social">
       <FaFacebookF/>
      </a>
    </div>
    <div>
    <a href="https://www.instagram.com/_lavanya_2210__/"
        className="youtube social">
       <BsInstagram/>
      </a>
    </div>
  </div>
);

export default SocialMedia;