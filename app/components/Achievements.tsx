"use client";
import React, { useEffect, useState } from 'react';
import '@/styles/achievements.css';
import sanityClient from "@/lib/sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dynamic from 'next/dynamic';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);
  const [isCenterMode, setIsCenterMode] = useState(true);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "achievement"]{..., "imageUrl": image.asset->url}`).then((data) => {
      setAchievements(data);
    });

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setCenterSlidePercentage(90);
        setIsCenterMode(true);
      } else if (width <= 1024) {
        setCenterSlidePercentage(45);
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
    <section id='achievements'>
      <h5>My Achievements</h5>
      <h2>Honours</h2>

      <div className="portfolio__container achievement__container mx-auto">
        <Carousel 
          showThumbs={false} 
          infiniteLoop 
          autoPlay 
          showStatus={false} 
          showIndicators={false}
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          centerMode={isCenterMode}
          centerSlidePercentage={centerSlidePercentage}
          className="w-full"
          interval={3000}
          swipeable={true}
          stopOnHover={true}
          axis="horizontal"
          autoFocus={true}
          transitionTime={500}
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
            <div key={_id} className='portfolio__item mx-1 sm:mx-0'>
              <img src={imageUrl} alt={heading} className="h-40 sm:h-48 w-full object-cover rounded-xl" />
              <h3 className="text-base sm:text-lg">{heading}</h3>
              <p className="text-xs sm:text-sm">{description}</p>
              <p className="text-xs text-gray-400 mt-1 sm:mt-2">{new Date(date).toLocaleDateString()}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Achievements;