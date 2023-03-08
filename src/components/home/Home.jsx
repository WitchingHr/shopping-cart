import React from "react";
import Header from "../common/Header";
import './styles/Home.css';
import { Link } from "react-router-dom";
import video from '../../assets/video.mp4';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="home-banner">
          <h1 className="home-banner-title">History means forever</h1>
          <p className="home-banner-para">
            With mantras from our athletes, 
            our Women's History Month capsule honors 
            the barriers they've broken - and defiantly 
            welcomes the future.
          </p>
        </div>
        <div className="home-department-group">
          <Link to="/store" className="home-department">
            <button className="home-department-button">Shop Men's Clothing</button>
          </Link>
          <Link to="/store" className="home-department">
            <button className="home-department-button">Shop Women's Clothing</button>
          </Link>
          <Link to="/store" className="home-department">
            <button className="home-department-button">Shop Jewelery</button>
          </Link>
          <Link to="/store" className="home-department">
            <button className="home-department-button">Shop Electronics</button>
          </Link>
        </div>
        <div className="home-footer">
        </div>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <Link to="/store" className="shop-now-link">
          <button className="button shop-now">Shop now</button>
        </Link>
      </div>
    </div>
  );
}