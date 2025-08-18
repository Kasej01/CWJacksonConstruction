// src/Home.jsx
import "../styles/pages/Home.css";
import Slideshow from "../components/Slideshow";

export default function Home() {
  const images = [
    "/slideshow_images/Screenshot_1.png",
    "/slideshow_images/Screenshot_2.png",
    "/slideshow_images/Screenshot_3.png",
    "/slideshow_images/Screenshot_4.png",
    "/slideshow_images/Screenshot_5.png",
    "/slideshow_images/Screenshot_6.png",
    "/slideshow_images/Screenshot_8.png",
    "/slideshow_images/Screenshot_9.png",
    "/slideshow_images/Screenshot_10.png"
  ];

  return (
    <div id="home-container">
      <section id="intro-container">
        <div className="home_intro">
          <h1>We do great work for great people</h1>
          <p>
            CW Jackson Construction LLC is a locally owned and operated business based in Grundy County, TN, specializing in dump truck services including gravel, topsoil, and fill dirt delivery. We also provide professional debris removal for trees, buildings, and more—handling projects of all sizes, from driveways and carports to parking lots. Our commitment to professionalism and customer satisfaction sets us apart. Fully licensed, registered, and insured, we proudly serve Grundy, Franklin, Coffee, and parts of Marion counties.
          </p>
          <div className="home_ctas">
            <a className="btn btn--primary" href="/contact">Get a Quote</a>
            <a className="btn" href="/services">See Services</a>
          </div>
        </div>

        <div className="home_carousel-wrap">
          <Slideshow images={images} fit="cover" />
        </div>
      </section>
      <section id="service-area-container">
          <h2>Service Area</h2>
          <p>
            We proudly serve Grundy, Franklin, Coffee, and parts of Marion counties. See the map below for our coverage area.
          </p>
          <img
            src="/service_map.png"
            alt="Service Area Map"
            className="home-service-map"
          />
      </section>
    </div>
  );
}
