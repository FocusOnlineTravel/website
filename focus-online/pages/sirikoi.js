import { useEffect, useState } from 'react';

// This is a simplified Faust.js layout for the Sirikoi Lodge website
const SirikoiLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 11;

  const nextSlide = () => {
    setCurrentSlide(current => (current === totalSlides ? 1 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 1 ? totalSlides : current - 1));
  };

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="sirikoi-layout">
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="logo-container">
            <a href="/">
              <img src="/sirikoi-logo.png" alt="Sirikoi Lodge" className="logo" />
            </a>
          </div>
          <nav className="main-navigation">
            <ul className="menu">
              <li><a href="/the-lodge">THE LODGE</a></li>
              <li><a href="/experiences">EXPERIENCES</a></li>
              <li><a href="/destination">DESTINATION</a></li>
              <li><a href="/our-legend">OUR LEGEND</a></li>
              <li><a href="/our-impact">OUR IMPACT</a></li>
              <li><a href="/inside-scoop">INSIDE SCOOP</a></li>
              <li><a href="/plan-your-journey">PLAN YOUR JOURNEY</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slideshow */}
      <section className="hero-slideshow">
        <div className="slide active" style={{ 
          backgroundImage: 'url("/kenya-acacia-tree.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="slide-content">
            <h1 className="hero-title">HELLO KENYA.</h1>
            <p className="hero-description">Small family-run lodge set in a shady acacia grove overlooking a waterhole.</p>
            <a href="/explore" className="btn-explore">EXPLORE</a>
          </div>
        </div>
        
        {/* Slide counter */}
        <div className="slide-counter">
          <button onClick={prevSlide} className="slide-prev">&lt;</button>
          <span>{currentSlide} / {totalSlides}</span>
          <button onClick={nextSlide} className="slide-next">&gt;</button>
        </div>
        
        {/* Welcome banner */}
        <div className="welcome-banner">
          <h2>Welcome TO <br />THE KENYAN</h2>
        </div>
      </section>

      {/* Main Content */}
      <main className="site-main">
        {/* Add more sections as needed */}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          {/* Footer content */}
        </div>
      </footer>

      <style jsx>{`
        .sirikoi-layout {
          font-family: 'Cormorant Garamond', serif;
          color: #fff;
        }
        
        .site-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
        }
        
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          height: 60px;
        }
        
        .main-navigation ul {
          display: flex;
          list-style: none;
          gap: 20px;
        }
        
        .main-navigation a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 1px;
        }
        
        .hero-slideshow {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
        .slide.active {
          opacity: 1;
        }
        
        .slide-content {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          text-align: center;
        }
        
        .hero-title {
          font-size: 5rem;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        
        .hero-description {
          font-size: 1.5rem;
          max-width: 600px;
          margin: 0 auto 30px;
        }
        
        .btn-explore {
          display: inline-block;
          background-color: #e67e22;
          color: #fff;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 3px;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .slide-counter {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
          z-index: 10;
        }
        
        .slide-prev, .slide-next {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }
        
        .welcome-banner {
          position: absolute;
          right: 0;
          bottom: 0;
          background-color: #e67e22;
          color: white;
          padding: 40px;
          z-index: 5;
          width: 300px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .welcome-banner h2 {
          font-size: 2.5rem;
          text-align: center;
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
};

export default SirikoiLayout;