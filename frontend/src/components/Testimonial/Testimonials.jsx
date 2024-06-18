import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        My Trouvaille experience was absolutely incredible! 
        From the moment I booked my trip to the day I returned, everything was seamless. 
        The accommodations were top-notch, the guided tours were informative and fun, 
        and the memories I made will last a lifetime. Thank you, Trouvaille, 
        for making my dream vacation a reality!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I've traveled with Trouvaille twice now, and both times were exceptional. 
        The attention to detail in planning and the friendly, 
        knowledgeable guides made all the difference. 
        Whether you're an adventure seeker or a cultural explorer, 
        Trouvaille has something for everyone. My only suggestion would be to offer even more destinations!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Trouvaille exceeded all my expectations! Their commitment to sustainable and responsible 
        travel was evident throughout the trip, which made me feel good about my choices as a traveler. 
        I was blown away by the diverse itineraries and the local insights provided by the guides. 
        I can't wait to book my next adventure with Trouvaille!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
        I can't say enough good things about Trouvaille. Their customer service is exceptional, 
        and they truly care about their travelers' experiences. 
        The trip was well-organized, and the activities were well-balanced between adventure and relaxation. 
        Trouvaille has earned a loyal customer in me, and I can't wait to explore more of the world with them!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
