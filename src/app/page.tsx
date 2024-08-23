import React from 'react'

const page = () => {
  return (
    <figure className="md:flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 gap-5">
 
 <div className="md:flex flex-col py-5">
  <img className="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto" src="/model.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-center font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium text-center">
      <div className="text-sky-500 dark:text-sky-400">
        Hashir Ali Ahmad
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        GEN AI Engineer, ManTech
      </div>
    </figcaption>
  </div>
  </div> 

  
  <div className="md:flex  bg-slate-400 py-6 rounded-xl">
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg mix-blend-difference font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium lg:text-right md:text-center">
      <div className="">
        Hashir Ali Ahmad
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        GEN AI Engineer, ManTech
      </div>
    </figcaption>
  </div>
  <img className="w-24 h-24  rounded-full my-auto mx-auto m-3" src="/model.png" alt="" width="384" height="512"/>
  </div> 

    
  <div className="md:flex p-5 bg-emerald-600">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto" src="/model.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center m-auto md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam rem, pariatur harum alias vitae. Ut consequuntur ex repellendus tempore placeat molestias tempora autem aperiam quas dolorum. Ipsam, rem molestias.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-lime-300">
        Hashir Ali Ahmad
      </div>
      <div className="text-lime-400">
        GEN AI Engineer, ManTech
      </div>
    </figcaption>
  </div>
  </div> 
  
  </figure>

  )
}

export default page
