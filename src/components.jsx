import { useState } from "react";

export function Logo({ dark = false }) {
  return (
    <a
      className={`logo ${dark ? "logo-dark" : ""}`}
      href="/#home"
      aria-label="ByteSpace home"
    >
      <svg className="logo-mark" viewBox="0 0 28 32" aria-hidden="true">
        <path
          d="M2 1v27.5c0 1.1.9 2 2 2h8.5C20.5 30.5 27 24 27 16S20.5 1.5 12.5 1.5H9v8h3.5a6.5 6.5 0 1 1-6.5 6.5V1H2Z"
          fill="currentColor"
        />
        <path d="m7 15 11 6.5-11 6.5V15Z" fill="#063bdc" />
      </svg>
      <span>ByteSpace</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header container">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="/#home">Home</a>
        <a href="/courses">Courses</a>
        <a href="/creators/purepearl-studio">Creators</a>
      </nav>
      <div className="header-actions">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <a href="/courses" aria-label="Explore courses">
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h11l1 11H2L3 6Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M6 7V4a2.5 2.5 0 0 1 5 0v3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export function CourseCard({ course }) {
  const slug = course[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return (
    <article className="course-card">
      <a
        className="course-image"
        href={`/courses/${slug}`}
        aria-label={`View ${course[0]}`}
      >
        <img src={`/images/${course[2]}`} alt="" loading="lazy" />
      </a>
      <div className="course-title">
        <h3>
          <a href={`/courses/${slug}`}>{course[0]}</a>
        </h3>
        <span>
          4.5 <b>★</b>
        </span>
      </div>
      <p className="course-author">
        by <a href="/creators/purepearl-studio">purepearl studio</a>
      </p>
      <div className="course-meta">
        <span className="level">▥&nbsp; Beginner</span>
        <span className="avatar-stack" aria-label="Students enrolled">
          <i>👩🏻</i>
          <i>👨🏽</i>
          <i>👩🏾</i>
          <i>👨🏻</i>
          <em>26+</em>
        </span>
      </div>
      <p className="price">
        <strong>$25</strong>
        <small>/lifetime</small>
      </p>
    </article>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  function subscribe(event) {
    event.preventDefault();
    setSubscribed(true);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <Logo dark />
            <p>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form onSubmit={subscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="pill lime">
                Search
              </button>
            </form>
            <small>
              {subscribed
                ? "Thanks for subscribing!"
                : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </small>
          </div>
          <div className="footer-links">
            <div>
              <a href="/courses">Featured Courses</a>
              <a href="/courses">Featured Categories</a>
              <a href="/courses">Business</a>
              <a href="/courses">IT</a>
              <a href="/courses">Design</a>
            </div>
            <div>
              <a href="/courses">Development</a>
              <a href="/courses">Marketing</a>
              <a href="/courses">Photography</a>
              <a href="/courses">Finance</a>
              <a href="/courses">Sport</a>
            </div>
            <div>
              <a href="/creators/purepearl-studio">Become a Creator</a>
              <a href="/creators/purepearl-studio">Affiliate Program</a>
              <a href="mailto:hello@bytespace.example">Contact</a>
              <a href="mailto:hello@bytespace.example">Help</a>
              <a href="/">About</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
