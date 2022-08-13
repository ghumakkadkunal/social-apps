import React from 'react';
import "./Footer.css";
import CopyRight from '../CopyRight/CopyRight';
import Facebook from './icons/fbk.svg';
import Instagram from './icons/ig.svg';
import Whatsapp from './icons/whatsapp.svg';
import YouTube from './icons/youtube.svg';
import Twitter from './icons/twitter.svg';

const Footer = (props) => {
  const social_channel = [
    {
      "name": "Facebook",
      "img": Facebook,
      "redirect_url": "https://www.facebook.com/pg/kunalgoyalofficial/posts/",
    },
    {
      "name": "Instagram",
      "img": Instagram,
      "redirect_url": "https://www.instagram.com/kunalgoyalofficial/",
    },
    {
      "name": "Whatsapp",
      "img": Whatsapp,
      "redirect_url": "https://api.whatsapp.com/send?text=Hi%20Kunal",
    },
    {
      "name": "YouTube",
      "img": YouTube,
      "redirect_url": "https://www.youtube.com/c/KunalGoyal/videos",
    },
    {
      "name": "Twitter",
      "img": Twitter,
      "redirect_url": "",
    }
  ]

  return (
    <>
      <section className="footerContainer">
        <div className="iconContainer">
          {social_channel?.map((list, index) => (
            <a 
              href={list?.redirect_url} 
              title={list?.redirect_url} 
              target="_blank" 
              key={index}
              rel="noreferrer"
            >
              <img 
                src={list?.img} 
                title={list?.name} 
                alt={list?.name} 
              />
              <p>{list?.name}</p>
            </a>
          ))}          
        </div>
        <CopyRight />
      </section>
    </>
  )
}

export default Footer;