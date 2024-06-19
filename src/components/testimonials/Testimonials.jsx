import React from "react";
import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";
// import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const peers = [
  {
    avatar: AVTR2,
    name: "TO BE UPDATED",
    review:
      "Nulla consectetur dolore ad ea consequat consectetur elit ea eu non. Est exercitation est labore sit nisi aute est esse quis fugiat cupidatat cillum. Pariatur nulla cupidatat velit ex pariatur sunt irure quis. Nostrud amet fugiat reprehenderit laborum aute dolor ea occaecat amet esse dolor do nostrud.",
  },
  {
    avatar: AVTR2,
    name: "TO BE UPDATED",
    review:
      "Ex consequat deserunt anim magna sint Lorem. Eiusmod pariatur sunt nostrud veniam in sint consequat est sunt. Labore sint velit consequat quis. Deserunt mollit aute enim elit. Ex fugiat ex dolor consequat ea veniam mollit. Cupidatat sint elit dolor laboris pariatur dolor voluptate excepteur.",
  },
  // {
  //   avatar: AVTR3,
  //   name: "Chimwewme Sinyinza",
  //   review:
  //     "Ex consequat deserunt anim magna sint Lorem. Eiusmod pariatur sunt nostrud veniam in sint consequat est sunt. Labore sint velit consequat quis. Deserunt mollit aute enim elit. Ex fugiat ex dolor consequat ea veniam mollit. Cupidatat sint elit dolor laboris pariatur dolor voluptate excepteur.",
  // },
  // {
  //   avatar: AVTR4,
  //   name: "Chimwewme Sinyinza",
  //   review:
  //     "Ex consequat deserunt anim magna sint Lorem. Eiusmod pariatur sunt nostrud veniam in sint consequat est sunt. Labore sint velit consequat quis. Deserunt mollit aute enim elit. Ex fugiat ex dolor consequat ea veniam mollit. Cupidatat sint elit dolor laboris pariatur dolor voluptate excepteur.",
  // }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;