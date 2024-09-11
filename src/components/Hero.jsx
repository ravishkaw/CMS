import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quas fugit maxime delectus odio voluptates quis maiores! Ipsam,
            delectus culpa.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Hero Image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
