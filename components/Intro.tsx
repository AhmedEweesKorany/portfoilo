"use client"

import Image from 'next/image'
import React from 'react'
import { delay, motion } from 'framer-motion'
import { FaFontAwesome,FaFontAwesomeFlag } from 'react-icons/fa'
import Link from 'next/link'
import {HiDownload} from 'react-icons/hi'
import {BsGithub, BsLinkedin} from "react-icons/bs"
export default function Intro() {
  return (
    <section className='mb-20 max-w-[50rem] text-center sm:mb-'>
        <div className="flex items-center justify-center h-100">
            <motion.div className='relative'
            initial={{opacity:0, scale:0}}
            animate = {{opacity:1,scale:1}}
            transition={{
                type:"tween",
                duration:0.3
            }}
            >
                <Image width='192' height="192" quality="95" priority={true} src="https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/332696585_912116216784422_2811395858561344893_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w3qHG2pVB9oAX-WMcst&_nc_ht=scontent.fcai20-4.fna&cb_e2o_trans=t&oh=00_AfA6YcZROk1gpMPOFAtda8Ke7OQ8f35hidxem4F-4t3rIQ&oe=6535C0F7" alt='my personal image ' className='w-24 h-24 rounded-full border-white border-[0.3rem]'/>
                <motion.span
                initial={{opacity:0, scale:0}}
                animate = {{opacity:1,scale:1}}
                transition={{
                    type:"spring",
                    duration:0.1,
                    delay:0.3,
                    stiffness:120
                }}
                 className='text-4xl text-green-500 absolute -right-4 bottom-3'>
                    ✔
                </motion.span>
            </motion.div>
        </div>
      <motion.div
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{
        type:"tween",
        duration: 0.7,
        delay:0.4
      }}
      >
      <p className='capitalize mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I'm Ahmed.</span> I'm a{" "}
        <span className="font-bold">front-end developer with a Drive to Become a Full-Stack Developer </span> with{" "}
        <span className="font-bold">almost 2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </p>
      </motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{delay:0.5}}
        className='flex items-center justify-center gap-3 flex-col text-lg font-medium sm:flex-row'>
            <Link href="#contact" className=' group px-7 py-3 flex items-center gap-2 rounded-full bg-gray-900 text-white hover:scale-105 transition duration-400'>Contact me here <span className='group-hover:translate-y-1/4 group-hover:transition'>👇</span></Link>
            <a className='group px-7 py-3 flex items-center gap-2 rounded-full bg-slate-200  hover:scale-105 transition duration-400' style={{cursor:"pointer"}} href="/CV.pdf" download={true}>Download CV <HiDownload className='group-hover:text-green-600 group-hover:translate-y-1/4'/> </a>
            <a target="_blank" href="https://eg.linkedin.com/in/ahmed-ewees-528657288?trk=public_profile_browsemap" className='p-3 flex items-center gap-2 rounded-full bg-slate-200  hover:scale-105 transition duration-400'><BsLinkedin/></a>
            <a target="_blank" href="https://github.com/AhmedEweesKorany" className='p-3 flex items-center gap-2 rounded-full bg-slate-200  hover:scale-105 transition duration-400'><BsGithub/></a>

        </motion.div>
    </section>
  )
}
