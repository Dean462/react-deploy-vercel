import React from 'react';
import './App.css';
import logo from './assets/img/logo770.png';
import { FaRegUserCircle } from "react-icons/fa";
import plus from './assets/img/plus.png'
import two from './assets/img/two.png'
import line from './assets/img/Line.png'
import { PiStarFourFill } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import FormValidation from './Component/FormValidation';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <p>Dhameliya Kidney Hospital</p>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Medical Services</a></li>
            <li><a href="/">Career</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="pro-btn">
          <FaRegUserCircle size='30px' color='rgba(3, 35, 66, 1)' />
          <button>Make Appointment</button>
        </div>
      </nav>
      <div className="img1">
        <img src={plus} alt="" />
      </div>
      <div className="img2">
        <img src={two} alt="" />
      </div>
      <div className="image">
        <div className="content-name">
          <h1>Career</h1>
          <div className="ct">
            <a href='/'>Home</a>
            <a href='/'>Career</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Career() {
  return (
    <div className="container">
      <div className="career">
        <h3>Career</h3>
        <div className="icon-line"><img src={line} alt="" /></div>
        <h2>Leave A <b>Message</b></h2>
        <div className="content">
          <p>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with
            complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class
            expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT.
            Hospital with all facilities under one roof provides for greater efficiency in meeting the overall
            needs of a patient.</p>
        </div>
        <form>
        <FormValidation />
        </form>
      </div>
      <div className="img-hospital"></div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="nl1">
        <h1>Newsletter</h1>
      </div>
      <div className="nl2">
        <h3>Get Smarter About No-Code</h3>
        <p>
          <PiStarFourFill />
          <span>
            The best No-Code tips & tricks, for webflow & Framer developers from experts to beginner. Join our 3k
            community by subscribing 
          </span>
          <PiStarFourFill />
        </p>
      </div>
      <div className="nl3">
        <input type="email" name="" id="" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="main-ft">
        <div className="ft1">
          <h3>Dhameliya Kidney Hospital</h3>
          <p>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with
            complicated kidney diseases in Surat. It is a judicious blend of high end technology, </p>
          <a href="/"><IoLogoFacebook /></a>
          <a href="/"><PiInstagramLogoFill /></a>
          <a href="/"><TiSocialLinkedinCircular /></a>
        </div>
        <div className="ft2">
          <h4>Get in Touch</h4>
          <p>If you have any questions or need help, feel free to contact with our team.</p>
          <p><a href="/"><MdOutlineLocalPhone /></a> +91 261 2490001</p>
          <p><a href="/"><IoLocationSharp /></a> 402, Aayush Doctor House, Lal Darwaja,
            Station Road, SURAT 395002 - GUJ INDIA</p>
          <p> Get Direction &#8594;</p>
          <p> Other Branches &#8594;</p>
        </div>
        <div className="ft3">
          <h3>Medical Service</h3>
          <ul>
            <li>Kidney Store</li>
            <li>Prostate</li>
            <li>Uro Oncology</li>
            <li>Paediatric Urology</li>
            <li>Female Urology</li>
          </ul>
        </div>
        <div className="ft4">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Medical Service</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="end-ft">
        <div className="line"></div>
        <p>Non Copyrighted © 2022 Design and upload by Dhameliya Kidney Hospital</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Career />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
