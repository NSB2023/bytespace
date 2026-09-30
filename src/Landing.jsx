import { useState } from "react";
import { courses, categories, paths, testimonials } from "./data";
import { Header, CourseCard } from "./components";

export function Hero({ onSearch }) {
  const [query, setQuery] = useState("");
  function submit(event) {
    event.preventDefault();
    onSearch(query);
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section className="hero-section blue-grid" id="home">
        <Header />
        <img
          className="hero-decor hero-decor-squiggle"
          src="/images/hero-left-squiggle.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="hero-decor hero-decor-fold"
          src="/images/hero-right-fold.png"
          alt=""
          aria-hidden="true"
        />
        <svg
          className="hero-decor hero-decor-triangle"
          viewBox="0 0 120 125"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="triangle-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="0.72" stopColor="#f7f8ff" />
              <stop offset="1" stopColor="#dbe0ec" />
            </linearGradient>
          </defs>
          <path
            d="M2 86 86 5c3-3 7-2 8 3l24 106c1 5-3 8-8 7L5 96c-5-1-7-6-3-10Z"
            fill="url(#triangle-gradient)"
          />
          <path
            d="M86 5 69 108l49 6L94 8c-1-5-5-6-8-3Z"
            fill="#e9ebf3"
            opacity=".45"
          />
        </svg>
        <div className="hero-copy container">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <form className="search-form" onSubmit={submit} role="search">
            <label className="sr-only" htmlFor="hero-search">
              Search courses
            </label>
            <span aria-hidden="true">⌕</span>
            <input
              id="hero-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Course, topic, creator"
            />
            <button className="pill lime" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="hero-art-wrap">
          <img
            src="/images/hero-clean-v2.png"
            alt="Student learning online with a laptop and progress cards"
          />
        </div>
      </section>
      <div className="logo-strip">
        <div className="container">
          <span>◉ Logoipsum</span>
          <span>✺ Logoipsum</span>
          <span>◈ Logoipsum</span>
          <span>❖ Logoipsum</span>
          <span>◉ Logoipsum</span>
        </div>
      </div>
    </>
  );
}

export function Courses({ search }) {
  const [active, setActive] = useState("Featured");
  const [more, setMore] = useState(false);
  const visible = courses.filter(
    (course) =>
      (!search ||
        `${course[0]} ${course[1]}`
          .toLowerCase()
          .includes(search.toLowerCase())) &&
      (active === "Featured" || course[1] === active),
  );
  return (
    <section className="courses-section section-pad container" id="courses">
      <div className="section-heading">
        <h2>
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br className="desktop-only" /> fields, from technology to the arts,
          and make a difference in your career and life.
        </p>
      </div>
      <div className="category-list" aria-label="Course categories">
        {categories.slice(0, more ? categories.length : 18).map((category) => (
          <button
            key={category}
            type="button"
            className={`category-chip ${active === category ? "active" : ""}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
        <button
          type="button"
          className="more-category"
          onClick={() => setMore(!more)}
        >
          {more ? "− Less" : "+ More"}
        </button>
      </div>
      {visible.length ? (
        <div className="course-grid">
          {visible.map((course) => (
            <CourseCard key={course[0]} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h3>No matching courses yet</h3>
          <p>Try Featured or a different search.</p>
          <button className="pill lime" onClick={() => setActive("Featured")}>
            View featured
          </button>
        </div>
      )}
    </section>
  );
}

export function LearningPaths() {
  return (
    <section className="paths-section section-pad container">
      <div className="section-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="desktop-only" /> fields, ensuring there’s something for
          everyone. Unleash your potential and explore our carefully curated
          categories.
        </p>
      </div>
      <div className="path-grid">
        {paths.map(([icon, name]) => (
          <a href="#courses" className="path-card" key={name}>
            <span className="path-icon">{icon}</span>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Growth() {
  return (
    <section className="growth-section">
      <div className="container growth-layout">
        <div className="growth-copy">
          <h2>
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p>
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <div className="stats">
            <div>
              <strong>12K</strong>
              <span>Students</span>
            </div>
            <div>
              <strong>70+</strong>
              <span>Courses</span>
            </div>
            <div>
              <strong>16</strong>
              <span>Creators</span>
            </div>
          </div>
        </div>
        <div className="growth-visual">
          <div className="growth-course-card">
            <img
              src="/images/course-figma.png"
              alt="Figma course preview"
              loading="lazy"
            />
            <strong>Learn Figma from Basic</strong>
            <small>by purepearl studio</small>
            <span>▥ Beginner</span>
            <b>
              $25<small>/lifetime</small>
            </b>
          </div>
          <img
            className="growth-student"
            src="/images/student-cutout.png"
            alt="Student exploring courses"
            loading="lazy"
          />
          <div className="growth-progress">
            <small>Learning Progress</small>
            <strong>55%</strong>
            <span>
              <i />
            </span>
          </div>
          <svg
            className="growth-squiggle"
            viewBox="0 0 100 135"
            aria-hidden="true"
          >
            <path
              d="M9 20c27-14 60-9 71-1-23 4-55 13-63 29 23-2 57 5 63 17-23 5-59 9-67 25 26-3 51 1 69 12"
              fill="none"
              stroke="#caff00"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export function Creator() {
  return (
    <>
      <section className="creator-info" id="creators">
        <div className="container creator-layout">
          <div className="creator-visual">
            <img
              src="/images/creator-clean.png"
              alt="Creator managing her online courses"
              loading="lazy"
            />
          </div>
          <div className="creator-copy">
            <h2>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p>
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul>
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="creator-cta blue-grid">
        <div className="container">
          <span className="cta-white-squiggle" aria-hidden="true">
            〰
          </span>
          <span className="cta-shape cta-shape-left" aria-hidden="true">
            ◯
          </span>
          <h2>
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p>
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <a className="pill lime" href="/signup">
            Join as Creator
          </a>
          <span className="cta-shape cta-shape-right" aria-hidden="true">
            〰
          </span>
        </div>
      </section>
    </>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-intro">
          <h2>
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, , quote], index) => (
            <article className="testimonial-card" key={name}>
              <img
                className="testimonial-avatar"
                src={`/images/testimonial-${["sarah", "james", "alex"][index]}.png`}
                alt={`${name} portrait`}
              />
              <h3>{name}</h3>
              <span className="testimonial-role">{role}</span>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
