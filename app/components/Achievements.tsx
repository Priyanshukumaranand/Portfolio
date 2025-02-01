"use client";
import React, { useEffect, useState } from 'react';
import '@/styles/achievements.css';
import sanityClient from "@/lib/sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  const [isCenterMode, setIsCenterMode] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "achievement"]{..., "imageUrl": image.asset->url}`).then((data) => {
      setAchievements(data);
    });

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCenterSlidePercentage(100);
        setIsCenterMode(false);
      } else if (window.innerWidth <= 1024) {
        setCenterSlidePercentage(50);
        setIsCenterMode(true);
      } else {
        setCenterSlidePercentage(33.33);
        setIsCenterMode(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='portfolio'>
      <h5>My Achievements</h5>
      <h2>Honours</h2>

      <div className="portfolio__container achievement__container">
        <Carousel 
          showThumbs={false} 
          infiniteLoop 
          autoPlay 
          showStatus={false} 
          showIndicators={false}
          centerMode={isCenterMode}
          centerSlidePercentage={centerSlidePercentage}
          className="w-full"
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <span
                className={`inline-block w-2 h-2 mx-1 rounded-full cursor-pointer ${
                  isSelected ? 'bg-primary' : 'bg-gray-400'
                }`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {achievements.map(({ _id, imageUrl, heading, description, date }) => (
            <div key={_id} className='portfolio__item mx-2 md:mx-1 sm:mx-0'>
              <img src={imageUrl} alt={heading} className="h-48 w-full object-cover rounded-xl" />
              <h3>{heading}</h3>
              <p className="text-sm">{description}</p>
              <p className="text-xs text-gray-400 mt-2">{new Date(date).toLocaleDateString()}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Achievements;