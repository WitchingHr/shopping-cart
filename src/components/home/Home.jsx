import React, { useEffect, useContext } from "react";
import { Context } from "../../RouteSwitch";
import Header from "../common/Header";
import './styles/Home.css';
import { Link } from "react-router-dom";
import video from '../../assets/video.mp4';

export default function Home() {
  const {setDeptFilter} = useContext(Context);

  useEffect(() => {
    setDeptFilter([]);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="home-banner">
          <h1 className="home-banner-title">Challenge your limits</h1>
          <p className="home-banner-para">
            Challenge is the pathway to engagement and progress in our lives.
          </p>
        </div>
        <div className="home-department-group">
          <Link to="/store/mens" className="home-department">
            <button className="home-department-button">Shop Men's Clothing</button>
          </Link>
          <Link to="/store/womens" className="home-department">
            <button className="home-department-button">Shop Women's Clothing</button>
          </Link>
          <Link to="/store/jewelery" className="home-department">
            <button className="home-department-button">Shop Jewelery</button>
          </Link>
          <Link to="/store/electronics" className="home-department">
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