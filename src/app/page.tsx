import React from 'react';


const page = () => {
  return (
    <figure className="md:flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 gap-5">
 
 <div className="md:flex flex-col py-5">
  <img className="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto" src="/model.png" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

    <figcaption className="font-medium text-center">
      <div className="text-sky-500 dark:text-sky-400">
        <h1>HAshir</h1>
      </div>
      <div className="text-slate-700 dark:text-slate-500">
      <p className="text-lg font-medium">
            {`“Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”`}
          </p>
      </div>
    </figcaption>
  </div>
  </div> 
  
  </figure>

  )
}

export default page;
