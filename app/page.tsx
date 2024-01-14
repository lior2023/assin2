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
  return (
    <body>
  
      <h1 >
        LIORS CAKES
      </h1>
      <iframe width="295" height="520" 
      src="https://www.youtube.com/embed/XbD612uBN8k?autoplay=1&mute=1&loop=1">
      </iframe>

      <h2 className='explain'>
        welcome!<br></br>im here to make your dream come true!<br></br>
        in the link below you can visit my instegram profile <br></br>and you can press the button to make a resevation! 
        <br></br> Im here for any question!
      </h2>
      <button type = "button" onClick={Al}
      >
        I want to make a reservation
      </button>
      <a href="https://www.instagram.com/lior.aviely?igsh=MW9wc3BpYnk1czlweA%3D%3D&utm_source=qr">to my instegram page</a> 
    
    
    </body>
  )
}
