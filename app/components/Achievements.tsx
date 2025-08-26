"use client";
import React, { useEffect, useState } from 'react';
import '@/styles/achievements.css';
import sanityClient from "@/lib/sanity";
import Image from 'next/image';


const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "achievement"]{..., "imageUrl": image.asset->url}`).then(setAchievements);
  }, []);

  return (
    <section id='achievements'>
      <h5>My Achievements</h5>
      <h2>Honours</h2>

      <div className="achievement__container mx-auto">
        <div className="achievements-grid">
          {achievements.map(({ _id, imageUrl, heading, description, date }) => (
            <div key={_id} className='portfolio__item achievement-card'>
              {imageUrl && (
                <Image src={imageUrl} alt={heading} width={400} height={192} className="rounded-xl w-full h-auto object-cover" />
              )}
              <h3 className="text-base sm:text-lg mt-3">{heading}</h3>
              <p className="text-xs sm:text-sm mt-1">{description}</p>
              <p className="text-xs text-gray-400 mt-2">{new Date(date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;