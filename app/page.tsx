import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
'use client'
import React, { useState } from 'react';




export default function Home() {
  
  const Al = () => {
    alert("YAYYY THANK YOU!!")
  };
  
  const [active, setActive] = useState(false);

  const changeColor = () => {
    setActive(!active);
  };
  

  return (
    <body>
  
      <h1 >
        LIORS CAKES
      </h1>
      <iframe width="295" height="520" 
      src="https://www.youtube.com/embed/XbD612uBN8k?autoplay=1&mute=1&loop=1">
      </iframe>
      
      <p className='explain'>
        <strong>welcome!</strong><br></br>im here to make your dream come true!<br></br>
        in the link below you can visit my <em>instegram</em> profile <br></br>and you can <em>press the button</em> to make a resevation! 
        <br></br> Im here for any question!
        <ul>
          <li>cakes</li>
          <li>cookies</li>
          <li>desserts</li>
        </ul>
      </p>
      


      <div className = "but2"  onClick={changeColor} style={{ backgroundColor: active ? "black" : "white" }}
      >
        <a href="https://www.instagram.com/lior.aviely?igsh=MW9wc3BpYnk1czlweA%3D%3D&utm_source=qr">to my instegram page</a> 
        <button type = "button" onClick={Al}
        >
          I want to make a reservation
        </button>
      </div>
      <img src="https://media.tenor.com/EEemcSEaAcAAAAAj/its-really-tasty-candice-hutchings.gif" alt="tasty face"  width="100" height="100"></img>

    </body>
  )
}
