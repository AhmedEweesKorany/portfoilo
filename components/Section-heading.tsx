import React from 'react'
type SectionHeadingProps={
  children: React.ReactNode;
}
export default function ({children}:SectionHeadingProps ) {
  return <h1 className="capitalize mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
    {children}
  </h1>
  
}
