'use client';
import React from 'react'
import Image from 'next/image'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';

 const whisperFormSchema = z.object({
    full_name: z.string().min(6, { message: "This field is required" }),
    email: z.string().email({ message: "Invalid email format" }).min(1, { message: "This field is required" }),
    subject: z.string().min(6, { message: "This field is required" }),
    message: z.string().min(5, { message: "This field is required" }),
    phone_number: z.string().min(10, { message: "This field is required" }),
});

export type whisperProps = z.infer<typeof whisperFormSchema>;

  
export default function About() {
 

  const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<whisperProps>({
        resolver: zodResolver(whisperFormSchema),
        defaultValues: {
            full_name: "",
            email: "",
            subject: "",
            message: "",
            phone_number: "",
        },
        mode: "onChange",
    });

  
 const onSubmit = (submittedData: whisperProps) => {
console.log(submittedData, 'uuuu')
  
    }
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
    <div className="">
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
   <div className="">
  <form className='mt-[1.5rem]' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {errors.full_name && (
                        <p className="text-red-700 mt-1 text-xs font-sans">{errors.full_name.message}</p>
                    )}
                    <Controller
                        control={control}
                        name="full_name"
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`px-[1.5rem] py-[1.1875rem] font-normal font-sans text-[#4E2667] bg-[#4E26671A]/10 border ${errors.full_name ? "border-red-700" : "border-[#4E26671A]"}`}
                                placeholder="Full Name"
                            />
                        )}
                    />
                </div>

                <div className='mt-[1rem]'>
                    {errors.email && (
                        <p className="text-red-700 mt-1 text-xs">{errors.email.message}</p>
                    )}
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`px-[1.5rem] py-[1.1875rem] font-normal font-sans text-[#4E2667] bg-[#4E26671A]/10 border ${errors.email ? "border-red-700" : "border-[#4E26671A]"}`}
                                placeholder="Email"
                                type="email"
                            />
                        )}
                    />
                </div>

                <div className="mt-[1rem]">
                    {errors.phone_number && (
                        <p className="text-red-700 mt-1 text-xs">{errors.phone_number.message}</p>
                    )}
                    <Controller
                        control={control}
                        name="phone_number"
                        render={({ field }) => (
                            <input
                                {...field}
                                type="tel"
                                className={`px-[1.5rem] py-[1.1875rem] font-normal font-sans text-[#4E2667] bg-[#4E26671A]/10 border ${errors.phone_number ? 'border-red-700' : 'border-[#4E26671A]'
                                    }`}
                                placeholder="Phone no"
                                onKeyDown={(e) => {
                                    const allowedKeys = [
                                        'Backspace',
                                        'ArrowLeft',
                                        'ArrowRight',
                                        'Tab',
                                        'Delete',
                                    ];
                                    const isNumber = /^[0-9]$/.test(e.key);
                                    if (!isNumber && !allowedKeys.includes(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        )}
                    />
                </div>


                <div className='mt-[1rem]'>
                    {errors.subject && (
                        <p className="text-red-700 mt-1 text-xs">{errors.subject.message}</p>
                    )}
                    <Controller
                        control={control}
                        name="subject"
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`px-[1.5rem] py-[1.1875rem] font-normal font-sans text-[#4E2667] bg-[#4E26671A]/10 border ${errors.subject ? "border-red-700" : "border-[#4E26671A]"}`}
                                placeholder="Subject"
                            />
                        )}
                    />
                </div>

                <div className='mt-[1rem]'>
                    {errors.message && (
                        <p className="text-red-700 mt-1 text-xs">{errors.message.message}</p>
                    )}
                    <Controller
                        control={control}
                        name="message"
                        render={({ field }) => (
                            <textarea
                                {...field}
                                rows={5}
                                className={`w-full resize-none rounded-md px-[1.5rem] py-[1.1875rem] font-medium font-sans text-[#4E2667] bg-[#4E26671A]/10 border ${errors.message
                                        ? "border-red-700"
                                        : "focus:border-[#4E26671A] !border-[#4E26671A]"
                                    } focus:outline-none focus:ring-0`}  
                                placeholder="Message"
                            />
                        )}
                    />

                </div>

                <button
                    className="bg-[#4E2667] text-[1rem] cursor-pointer font-medium mt-[2.625rem] font-sans [@media(max-width:640px)]:w-full"
                    type="submit"

                >
                    Send Message

                </button>



            </form>

   </div>
   <p>Yemoooooo</p>
    </div>
  


  )
}
