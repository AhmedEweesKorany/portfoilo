"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Section-heading";

export default function About() {
  return (
    <motion.div
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{
        delay:0.125
    }}
    className="flex justify-center items-center">
      <div className="max-w-[50rem] text-center p-3">
      <SectionHeading>
        About Me
      </SectionHeading>
      <p className="mb-3">
      I am a dedicated front-end developer with a strong passion for creating captivating and user-friendly interfaces. 
Proficient in HTML, CSS, and JavaScript, I have a keen eye for detail and a deep understanding of front-end 
development principles like React.js Next.js and even Bootstarp and Tailwind. My goal-oriented mindset and commitment to staying updated with the latest industry trends 
enable me to deliver exceptional results.
Driven by a desire for continuous growth and expanding my skill set, I am currently on a journey to become a fullstack developer. I am actively learning back-end technologies such as server-side scripting and databases, as well 
as gaining proficiency in frameworks like Node.js and Python. This transition allows me to handle both front-end and 
back-end responsibilities, empowering me to create more dynamic and robust applications.

      </p>

      <p>
      By combining my front-end expertise with my ongoing full-stack learning, I am equipped to tackle complex 
development challenges and contribute to the entire web development process. I am excited to apply my expanding 
skill set to create seamless and impactful digital experiences while continuously pushing the boundaries of my 
abilities.

      </p>
      </div>
    </motion.div>
  );
}
