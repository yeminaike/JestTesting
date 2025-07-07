
import React from 'react'
import Image from 'next/image'


export default function About() {

  const logos = [

    {
      id: 1,
      logo: '/images/LogoAI.png'

    },

    {
      id: 2,
      logo: '/images/Profile.png'
    },

    {
      id: 3,
      logo: '/images/PdfIcon.png'
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
        </div>
      ))
    )}


   </div>


  )
}
