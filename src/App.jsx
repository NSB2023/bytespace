import { useState } from "react";
import "./App.css";

const courses = [
  ["Learn Figma from Basic", "UI/UX Design", "course-figma.png"],
  ["Build Digital Asset", "Digital Illustration", "course-assets.png"],
  ["the Power of Big Data", "Data Science", "course-data.png"],
  [
    "Balancing Productivity and Life",
    "Productivity",
    "course-productivity.png",
  ],
  ["Mastering Money Management", "Business", "course-finance.png"],
  ["From Idea to Startup Success", "Marketing", "course-startup.png"],
];
const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "Business",
];
const paths = [
  ["✣", "Design"],
  ["⌘", "Development"],
  ["▣", "IT & Software"],
  ["▦", "Business"],
  ["◉", "Marketing"],
  ["▧", "Photography"],
];
const testimonials = [
  [
    "Sarah M.",
    "Enthusiastic Learner",
    "SM",
    "“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.”",
  ],
  [
    "James L.",
    "Lifelong Learner",
    "JL",
    "“I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.”",
  ],
  [
    "Alex B.",
    "Inspired Creator",
    "AB",
    "“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It’s fulfilling to see my courses making a positive impact on learners globally.”",
  ],
];
function Logo({ dark = false }) {
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
function Header() {
  return (
    <header className="site-header container">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="/#home">Home</a>
        <a href="/#courses">Courses</a>
        <a href="/#creators">Creators</a>
      </nav>
      <div className="header-actions">
        <a href="/login">Sign In</a>
        <a href="/signup">Join Us</a>
        <a href="/#courses" aria-label="Explore courses">
          ♧
        </a>
      </div>
    </header>
  );
}
function Hero({ onSearch }) {
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
function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={`/images/${course[2]}`} alt="" loading="lazy" />
      </div>
      <div className="course-title">
        <h3>{course[0]}</h3>
        <span>
          4.5 <b>★</b>
        </span>
      </div>
      <p className="course-author">
        by <a href="#creators">purepearl studio</a>
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
function Courses({ search }) {
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
function LearningPaths() {
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
function Growth() {
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
          <img
            src="/images/hero-clean-v2.png"
            alt="Student exploring courses"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
function Creator() {
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
function Testimonials() {
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
          {testimonials.map(([name, role, initials, quote]) => (
            <article className="testimonial-card" key={name}>
              <span className="testimonial-avatar">{initials}</span>
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
function Footer() {
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
              <a href="#courses">Featured Courses</a>
              <a href="#courses">Featured Categories</a>
              <a href="#courses">Business</a>
              <a href="#courses">IT</a>
              <a href="#courses">Design</a>
            </div>
            <div>
              <a href="#courses">Development</a>
              <a href="#courses">Marketing</a>
              <a href="#courses">Photography</a>
              <a href="#courses">Finance</a>
              <a href="#courses">Sport</a>
            </div>
            <div>
              <a href="#creators">Become a Creator</a>
              <a href="#creators">Affiliate Program</a>
              <a href="mailto:hello@bytespace.example">Contact</a>
              <a href="mailto:hello@bytespace.example">Help</a>
              <a href="#home">About</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a href="#home">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function AuthPage({ signup }) {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    setMessage("This design demo does not connect to an account service yet.");
  }
  return (
    <main className="auth-page blue-grid">
      <div className="container auth-layout">
        <div className="auth-left">
          <Logo />
          <h2>{signup ? "Sign up and come in" : "Sign in with ease"}</h2>
          <p>
            {signup
              ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
              : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
          </p>
          <img
            src="/images/hero-clean-v2.png"
            alt="ByteSpace learning experience"
          />
        </div>
        <div className="auth-panel">
          <span>{signup ? "Create an Account" : "Sign In"}</span>
          <h1>
            {signup ? (
              <>
                Welcome to
                <br />
                ByteSpace
              </>
            ) : (
              "Welcome Back"
            )}
          </h1>
          <form onSubmit={submit}>
            {signup ? (
              <label>
                Full Name
                <input type="text" placeholder="Jamie Davis" required />
              </label>
            ) : null}
            <label>
              Email
              <input type="email" placeholder="designer@example.com" required />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="********"
                minLength="8"
                required
              />
            </label>
            <button className="pill lime" type="submit">
              {signup ? "Continue" : "Sign In"}
            </button>
          </form>
          {message ? (
            <p className="auth-message" role="status">
              {message}
            </p>
          ) : null}
          <p className="auth-switch">
            {signup ? "Already have an account?" : "New user?"}{" "}
            <a href={signup ? "/login" : "/signup"}>
              {signup ? "Login" : "Create an account"}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
function App() {
  const [search, setSearch] = useState("");
  const pathname = window.location.pathname;
  if (pathname === "/login" || pathname === "/signup")
    return <AuthPage signup={pathname === "/signup"} />;
  return (
    <>
      <Hero onSearch={setSearch} />
      <main>
        <Courses search={search} />
        <LearningPaths />
        <Growth />
        <Creator />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
export default App;
