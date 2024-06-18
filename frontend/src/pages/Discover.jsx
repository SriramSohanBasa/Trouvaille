import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './../styles/Discover.css'; // Ensure this CSS file exists

const Discover = () => {
  // Sample data for user stories, including the new ones
  const stories = [
    { img: 'tour-img01.jpg', review: "Marrakech's medina is a maze of colors, scents, and culture. Exploring the souks, sipping mint tea, and staying in a riad was a sensory overload in the best way possible. Morocco's vibrant energy is something I'll cherish forever. The call to prayer echoing through the city, haggling in the markets, and the intricate tile work and architecture of the palaces and mosques were highlights of my Marrakech adventure.", user: 'John Doe' },
    { img: 'tour-img02.jpg', review: "Santorini's sunsets over the Aegean Sea are pure magic! My days were spent strolling through charming villages, indulging in local cuisine, and lazing on beautiful beaches. This Greek island paradise truly rejuvenated my soul. Exploring the historic town of Oia, swimming in crystal-clear waters, and enjoying fresh seafood with a view of the caldera made every day in Santorini a dream come true.", user: 'Jane Smith' },
    // New stories
    { img: 'tour-img03.jpg', review: "Hiking the Inca Trail to Machu Picchu was a life-changing adventure. The ancient ruins, breathtaking landscapes, and the sense of accomplishment at the Sun Gate left me speechless. It's a challenging but incredibly rewarding experience. The camaraderie with fellow trekkers, the guides' knowledge of Inca history, and the mystical atmosphere of Machu Picchu itself created memories that will stay with me forever.", user: 'Rodgriez' },
    { img: 'tour-img04.jpg', review: "My journey through the Amazon rainforest was a breathtaking adventure! The lush greenery, exotic wildlife, and riverboat expeditions left me in awe. It's an experience I'll treasure forever, and I highly recommend it to fellow nature enthusiasts. Waking up to the sounds of the jungle and spotting monkeys, toucans, and even a jaguar during our excursions made this trip truly unforgettable.", user: 'Nick' },
    { img: 'tour-img05.jpg', review: "Tokyo's vibrant culture and bustling streets captivated me from day one. From sushi-making classes to tranquil temples, every moment was a delightful surprise. Tokyo is a city that seamlessly blends tradition and modernity, making it an unforgettable destination. The neon lights of Shibuya Crossing, the tranquil gardens of Meiji Shrine, and the mouthwatering street food in Asakusa are just a few of the highlights.", user: 'Jaden' },
    // Add more stories here if needed
  ];

  // SampleNextArrow component for custom next arrow
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        onClick={onClick}
      >
        <i className="ri-arrow-right-s-line"></i> {/* Using Remix Icon */}
      </div>
    );
  }

  // SamplePrevArrow component for custom previous arrow
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        onClick={onClick}
      >
        <i className="ri-arrow-left-s-line"></i> {/* Using Remix Icon */}
      </div>
    );
  }

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Helper function to dynamically load images
  const getImage = (path) => {
    try {
      return require(`../assets/images/tour-images/${path}`);
    } catch (err) {
      console.error(`Cannot find image: ${path}`);
      return null; // Return a fallback image or null
    }
  };

  // Render the slider with user stories
  return (
    <div className="discover-container">
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index} className="story">
            <div className="story-image">
              <img src={getImage(story.img)} alt="Destination" />
            </div>
            <div className="story-review">
              <p>{story.review}</p>
              <span>- {story.user}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Discover;
