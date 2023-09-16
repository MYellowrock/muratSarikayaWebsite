import "../css/hero.css";

function Hero({ src, alt }) {

  return (
    <div
      id="hero"
      className="z-5 image-container h-screen pt-[100px]"
    >
      <div className="image-3d-container">
        <img
          src={src}
          alt={alt}
          className="image"
          id="hero-image"
          width={200}
        />
      </div>
      <div id="hero-infos">
        <h1 id="hero-name" className="text-6xl font-extrabold text-white">
          <span className="text-background cursor-default">MURAT SARIKAYA</span>
        </h1>
        <span id="hero-department" className="text-2xl font-bold text-white">
          <span className="text-background description-web cursor-default">Web Developer</span>
        </span>
      </div>
    </div>
  );
}

export default Hero;
