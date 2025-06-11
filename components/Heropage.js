import React from 'react';
import Image from 'next/image';

export default function HeroPage({ carousel }) {
  return (
    <div className="container-fluid p-0" id="home">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carousel.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="position-relative">
                <img
                  src={item.image}
                  alt={item.alt || 'Slide image'}
                  className="d-block w-100 img-fluid"
                  style={{ height: '80vh', objectFit: 'cover' }}
                />

                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h2 className="display-5 text-white fw-bold">New Collection</h2>
                  <h4 className="text-light">Summer Refreshment</h4>
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">#NaturalIngredients</span>
                    <span className="badge bg-success">#ZeroSugar</span>
                  </div>
                  <a className="btn btn-primary px-4 py-2 mt-2" href="#products">Explore Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bootstrap Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Carousel indicators */}
        <div className="carousel-indicators">
          {carousel.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
