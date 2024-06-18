import React from "react";

import CommonSection from "../shared/CommonSection.tsx";
import "../styles/about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 2000, // duration of the animation in milliseconds
          once: false, // whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
    <>
        <CommonSection title={"About Us"} />

        <section>
            <div class="about" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1><strong>Trouvaille</strong> - Where every journey is a story.</h1>

            <h2>About Us</h2>
            <p>At Trouvaille, we believe that travel is more than just a destination; it's a transformative experience that opens hearts, broadens minds, and creates lasting connections. Our passion for exploration led us to create a platform that not only inspires wanderlust but also facilitates seamless and unforgettable journeys.</p>

            <h2 data-aos="fade-right">Who we are:</h2>
            <p>Founded by a team of avid travelers with a shared love for discovery, Trouvaille is more than just a travel website; it's a community of like-minded adventurers. Whether you're a solo traveler seeking new horizons, a couple yearning for romantic getaways, a family in search of bonding adventures, or a group of friends ready to explore the world together, we've curated a diverse range of experiences to cater to every traveler's unique desires.</p>

            <h2 data-aos="fade-left">What sets us apart</h2>
            <ul>
            <li><strong>Handpicked Destinations:</strong> We meticulously select destinations that offer a perfect blend of culture, adventure, and relaxation.</li>
            <li><strong>Expert Guides:</strong> Our knowledgeable and friendly local guides are passionate about sharing the secrets of their homeland.</li>
            <li><strong>Tailored Experiences:</strong> Recognizing that each traveler is unique, we offer customizable itineraries.</li>
            <li><strong>Ease of Booking:</strong> Our user-friendly platform makes planning your dream getaway a breeze.</li>
            <li><strong>Community Engagement:</strong> Join our community of passionate travelers on social media platforms.</li>
            </ul>

            <h2 data-aos="fade-up">Our Mission</h2>
            <p>At Trouvaille, our mission is to inspire and empower people to explore the world. We believe that travel has the power to break down barriers, foster understanding, and create a global community connected by shared experiences. Through our carefully curated journeys, we aim to make travel accessible, enjoyable, and a catalyst for personal growth.</p>

            <p>Join us on this incredible journey, and let's explore the world together!</p>

            <p>Trouvaille Group!</p>

            </div>
        </section>
        
    </>
        
        
    )
};


export default About;


