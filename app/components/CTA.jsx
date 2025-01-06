"use client";
import React, { useEffect, useState } from 'react';
import sanityClient from "@/lib/sanity";

const CTA = () => {
  const [resumeLink, setResumeLink] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "resume"]{
          "resumeUrl": resumeFile.asset->url
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setResumeLink(data[0].resumeUrl);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="cta">
      <a href={resumeLink} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
