import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  // ---- SLIDER DATA ----
  const slides = [
    {
      image: "/images/slider1.jpg",
      title: "Techmindz Digital Consulting",
      text: "Training • Virtual Job Support • Corporate Training"
    },
    {
      image: "/images/slider2.jpg",
      title: "Learn From Industry Experts",
      text: "100% practical, real-time, project-oriented training"
    },
    {
      image: "/images/slider3.jpg",
      title: "Virtual Job Support",
      text: "We help you perform confidently in live projects"
    },
    {
      image: "/images/slider4.jpg",
      title: "Corporate Training",
      text: "Customized programs for organizations & teams"
    },
    {
      image: "/images/slider5.jpg",
      title: "Your Career Growth Partner",
      text: "We bridge the gap between skills and opportunity"
    }
  ];

  const [index, setIndex] = useState(0);

  // auto change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>

      {/* ---------- SLIDER SECTION ON TOP ---------- */}
      <div className="home-slider">

        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">

              {/* ⭐⭐ HIGHLIGHTED TEXT ⭐⭐ */}
              <h1 className={i === index ? "highlight-title" : ""}>
                {slide.title}
              </h1>

              <p className={i === index ? "highlight-text" : ""}>
                {slide.text}
              </p>

            </div>
          </div>
        ))}

      </div>

      {/* ---------- YOUR ORIGINAL HOME CONTENT BELOW ---------- */}
      <div className="page">

        <h1>We Can Help You With Your Training & Job Support</h1>

        <p>
          Techmindz offers Online Training, Virtual Job Support and Corporate Training
          delivered by experienced professionals to help you achieve real career growth.
        </p>

        <Link to="/contact">
          <button>Contact Now</button>
        </Link>

        <h1>What We Do</h1>

        <div className="grid">

          <div className="card">
            <h3>Online Training</h3>
            <p>
              Our online training methodology is integrated with a virtual classroom
              system which is a powerful platform designed for effective internet-based training.
            </p>
          </div>

          <div className="card">
            <h3>Virtual Job Support</h3>
            <p>
              Our virtual job support program helps freshers and working professionals
              handle real-time projects with expert guidance and confidence.
            </p>
          </div>

          <div className="card">
            <h3>Corporate Training</h3>
            <p>
              We bridge the skill gap through customised corporate training delivered
              by experienced industry professionals.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
