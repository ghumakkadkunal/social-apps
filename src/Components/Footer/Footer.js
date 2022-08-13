import React from 'react';
import "./Footer.css";
import CopyRight from '../CopyRight/CopyRight';

const Footer = (props) => {
  const social_channel = [
    {
        "name": "Facebook",
        "img": "icons/fbk.svg",
        "redirect_url": "",
    },
    {
        "name": "Instagram",
        "img": "",
        "redirect_url": "",
    },
    {
        "name": "Whatsapp",
        "img": "",
        "redirect_url": "",
    },
    {
        "name": "YouTube",
        "img": "",
        "redirect_url": "",
    },
    {
        "name": "Twitter",
        "img": "",
        "redirect_url": "",
    }
  ]
  return (
    <>
      <section className="footerContainer">
        <div className="iconContainer">
          {social_channel?.map((list, index) => (
            <a href={list?.redirect_url} title={list?.redirect_url} target="_blank" key={index}>
              <img src={"public/icons/fbk.svg"} title={list?.name} alt={list?.name} />
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