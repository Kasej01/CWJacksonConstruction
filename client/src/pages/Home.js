// src/Home.jsx
import "../styles/pages/Home.css";
import Slideshow from "../components/Slideshow";

export default function Home() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];

  return (
    <section className="home">
      <div className="home__intro">
        <h1>We do great work for great people</h1>
        <p>
          We help local homeowners with fast, high-quality pressure washing that restores curb appeal.
          Based in Franklin County, we’ve served Middle Tennessee since 2018, combining pro-grade
          equipment and eco-friendly detergents to deliver results you can count on.
        </p>
        <div className="home__ctas">
          <a className="btn btn--primary" href="/contact">Get a Quote</a>
          <a className="btn" href="/services">See Services</a>
        </div>
      </div>

      <div className="home__carousel-wrap">
        <Slideshow images={images} fit="cover" />
      </div>
    </section>
  );
}
