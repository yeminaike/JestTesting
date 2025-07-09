
import React from 'react'
import Image from 'next/image'


export default function About() {

  const logos = [

    {
      id: 1,
      logo: '/images/LogoAI.png',
      logoName: 'Tobi'

    },

    {
      id: 2,
      logo: '/images/Profile.png',
      logoName: 'Yemoooooo'
    },

    {
      id: 3,
      logo: '/images/PdfIcon.png',
      logoName: 'Djokovic'
    }

  ]

  return (
   <div className="grid md: grid-cols-3">
    {logos && (
      logos.map((logo) => (
        <div className="" key={logo.id}>

          <div className="">
            <Image
            alt='logos'
            src={logo.logo}
            width={100}
            height={80}
            />
          </div>

          <p>{logo.logoName}</p>
        </div>
      ))
    )}


   </div>


  )
}
