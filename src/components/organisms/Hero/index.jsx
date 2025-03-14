import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { avatar } from '../../../assets';

export const Hero = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const downloadBtnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: '-100%',
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        h12.current,
        {
          x: '-100%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        h13.current,
        {
          x: '-100%',
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        myimageref.current,
        {
          x: '200%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        downloadBtnRef.current,
        {
          y: '50%',
          opacity: 0,
          delay: 0.7,
          duration: 1.5,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  const handleDownloadCV = () => {
    // Membuat anchor element
    const link = document.createElement('a');
    link.href = '/CV ATS Aldi Mardiansah.pdf';
    link.download = 'CV Aldi Mardiansah.pdf'; // Nama file yang akan didownload
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋 <br /> My Name is <br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          aldi mardiansah
        </h1>
        <h3
          ref={h13}
          className="w-full text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          fullstack web developer
        </h3>
        <button
          type="button"
          ref={downloadBtnRef}
          onClick={handleDownloadCV}
          className="mt-6 px-6 py-3 bg-gradient rounded-lg text-white font-medium hover:opacity-90 transition-all shadow-md flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download CV
        </button>
      </div>
      <div className="mt-5 md:mt-0 w-48">
        <img
          ref={myimageref}
          src={avatar}
          alt="avatar"
          className="w-1/2 md:ml-auto w-100 border-8 border-dark-primary dark:border-light-primary rounded-full bg-slate-500"
        />
      </div>
    </main>
  );
};
