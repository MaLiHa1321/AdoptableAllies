import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/tZ7tQMv/pexels-matheus-bertelli-573293.jpg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Adopt a Pet, <br /> Save a Life</h1>
      <p className="mb-5 text-2xl text-white">Welcome to AdoptAlice, where we're dedicated to helping you find your forever friend. Our mission is to promote pet adoption and provide loving homes for animals in need..</p>
      <button className="btn btn-outline btn-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;