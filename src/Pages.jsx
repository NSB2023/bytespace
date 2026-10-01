import { useState } from "react";
import { courses, categories } from "./data";
import { Header, Footer, CourseCard } from "./components";

const moduleTitles = [
  "Introduction to Digital Assets",
  "Design Principles for Impact",
  "Advanced Techniques in Digital Creation",
  "User-Centric Design Strategies",
  "Interactive Media and Engagement",
  "Project Showcase and Critique",
  "Optimizing Digital Assets for Various Platforms",
];
const reviewData = [
  [
    "PurePearl Studio",
    5,
    "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  ],
  [
    "Albert Flores",
    5,
    "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
  ],
  [
    "Cody Fisher",
    5,
    "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills.",
  ],
  [
    "Brooklyn Simmons",
    4,
    "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape.",
  ],
];
const catalogCourses = Array.from(
  { length: 120 },
  (_, index) => courses[index % courses.length],
);

export function CatalogPage() {
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Featured");
  const [level, setLevel] = useState(false);
  const [sort, setSort] = useState(false);
  const [page, setPage] = useState(1);
  const matches = catalogCourses.filter(
    (course) =>
      (category === "Featured" || course[1] === category) &&
      (!search ||
        `${course[0]} ${course[1]}`
          .toLowerCase()
          .includes(search.toLowerCase())),
  );
  const ordered = sort ? [...matches].reverse() : matches;
  const pages = Math.max(1, Math.ceil(ordered.length / 24));
  const shown = ordered.slice((page - 1) * 24, page * 24);
  function chooseCategory(value) {
    setCategory(value);
    setPage(1);
  }
  return (
    <>
      <section className="catalog-hero blue-grid">
        <Header />
        <div className="container catalog-hero-inner">
          <h1>Find Your Next Course</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearch(draft);
              setPage(1);
            }}
            role="search"
          >
            <label className="sr-only" htmlFor="catalog-search">
              Search courses
            </label>
            <span aria-hidden="true">⌕</span>
            <input
              id="catalog-search"
              placeholder="Search"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
            <button className="pill lime" type="submit">
              Courses <span aria-hidden="true">⌄</span>
            </button>
          </form>
        </div>
      </section>
      <main className="catalog-main container">
        <div className="catalog-toolbar">
          <div>
            <button
              onClick={() => {
                setSearch("");
                setDraft("");
                chooseCategory("Featured");
              }}
              type="button"
            >
              ▽ Filter
            </button>
            <button
              className={level ? "selected" : ""}
              onClick={() => setLevel(!level)}
              type="button"
            >
              ▥ Level
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("catalog-categories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ♧ Category
            </button>
          </div>
          <button onClick={() => setSort(!sort)} type="button">
            ☰ {sort ? "Newest first" : "Most relevant"}
          </button>
        </div>
        <div className="catalog-chips" id="catalog-categories">
          {categories
            .slice(0, 8)
            .concat("Cooking")
            .map((value) => (
              <button
                key={value}
                type="button"
                className={`category-chip ${category === value ? "active" : ""}`}
                onClick={() => chooseCategory(value)}
              >
                {value}
              </button>
            ))}
        </div>
        {level ? (
          <p className="catalog-filter-note">
            Showing beginner-friendly courses
          </p>
        ) : null}
        {shown.length ? (
          <div className="course-grid catalog-grid">
            {shown.map((course, index) => (
              <CourseCard key={`${page}-${index}`} course={course} />
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <h2>No matching courses</h2>
            <p>Try a different course name or category.</p>
            <button
              className="pill lime"
              onClick={() => {
                setSearch("");
                setDraft("");
                chooseCategory("Featured");
              }}
            >
              View all courses
            </button>
          </div>
        )}
        <nav className="pagination" aria-label="Course pages">
          <button
            type="button"
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            aria-label="Previous page"
          >
            ‹
          </button>
          {Array.from({ length: pages }, (_, index) => (
            <button
              key={index}
              type="button"
              className={page === index + 1 ? "current" : ""}
              onClick={() => {
                setPage(index + 1);
                window.scrollTo({ top: 300, behavior: "smooth" });
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(Math.min(pages, page + 1))}
            disabled={page === pages}
            aria-label="Next page"
          >
            ›
          </button>
        </nav>
      </main>
      <Footer />
    </>
  );
}

function DetailSidebar() {
  return (
    <aside className="detail-sidebar">
      <h2>112 Lessons (24 hours)</h2>
      <ol>
        <li>
          <span>01</span> Introduction to Digital Assets <small>12 mins</small>
        </li>
        <li>
          <span>02</span> Design Principles for Impacts <small>21 mins</small>
        </li>
        <li>
          <span>03</span> Advanced Techniques in Digital Creation{" "}
          <small>16 mins</small>
        </li>
      </ol>
      <p className="muted">99 more videos</p>
      <p className="sidebar-pitch">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <p className="price">
        <strong>$25</strong>
        <small>/lifetime</small>
      </p>
      <a className="pill lime" href="/signup">
        Enroll Now
      </a>
      <h3>This course include</h3>
      <ul className="include-list">
        <li>▣ &nbsp; Learning Resources</li>
        <li>▣ &nbsp; Quality Lesson Videos</li>
        <li>▣ &nbsp; Certificate of Completion</li>
        <li>✣ &nbsp; Private Consultation</li>
      </ul>
      <div className="sidebar-creator">
        <img src="/images/creator-avatar.png" alt="PurePearl Studio" />
        <div>
          <strong>PurePearl Studio</strong>
          <span>Professional Creator</span>
        </div>
      </div>
      <p className="sidebar-pitch">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <a className="small-outline" href="/creators/purepearl-studio">
        See Full Profile
      </a>
    </aside>
  );
}

function AboutTab() {
  const points = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];
  return (
    <div className="detail-tab-panel">
      <h2>Description</h2>
      <p>
        Embark on an enlightening exploration into the world of digital creation
        with our comprehensive course, “Build Digital Assets: A Comprehensive
        Guide.” This transformative learning experience invites you to delve
        deep into the intricacies of crafting impactful digital content. From
        laying the groundwork with foundational concepts to mastering advanced
        techniques, this guide is meticulously curated to empower you with the
        skills essential for navigating the dynamic landscape of digital asset
        creation.
      </p>
      <p>
        In the initial modules, you’ll establish a solid foundation by immersing
        yourself in the foundational concepts that form the backbone of digital
        asset creation. Understand the fundamental elements that constitute
        compelling digital content and gain proficiency in leveraging these
        elements to communicate effectively in the digital realm.
      </p>
      <p>
        As you progress through the course, you’ll ascend to higher levels of
        expertise, delving into the nuances of design principles that drive
        impactful creations. Uncover the secrets behind effective visual
        communication, exploring color theory, typography, and layout strategies
        that elevate your digital assets to new heights.
      </p>
      <h2>Sneak Peek</h2>
      <div className="sneak-grid">
        {[
          "course-figma.png",
          "course-assets.png",
          "course-productivity.png",
          "course-startup.png",
        ].map((file) => (
          <img
            key={file}
            src={`/images/${file}`}
            alt="Preview of course work"
          />
        ))}
      </div>
      <h2>Key Points</h2>
      <ul className="key-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function LessonsTab() {
  return (
    <div className="detail-tab-panel">
      <h2>Explore the Modules</h2>
      <p>
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>
      <h2>Lesson List</h2>
      <div className="module-list">
        {moduleTitles.map((title, index) => (
          <div className="module" key={title}>
            <span aria-hidden="true">▣</span>
            <div>
              <strong>
                Module {index + 1}: {title}
              </strong>
              <p>
                Lay the groundwork with practical lessons, creative exercises,
                and real-world examples to strengthen your digital design
                skills.
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2>Lesson Content</h2>
      <p>
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>
      <h2>Lesson Progress Tracking</h2>
      <p>
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>
      <div className="progress-card">
        <span>Learning Progress</span>
        <strong>55%</strong>
        <div>
          <i />
        </div>
      </div>
    </div>
  );
}

function ReviewsTab() {
  const [rating, setRating] = useState(0);
  const visible = reviewData.filter(
    (review) => !rating || review[1] === rating,
  );
  return (
    <div className="detail-tab-panel">
      <h2>What Learners Are Saying</h2>
      <p>
        Discover what our learners have to say about their experience with
        “Build Digital Assets: A Comprehensive Guide.” Read reviews and ratings
        from individuals who have embarked on the transformative journey of
        mastering digital asset creation.
      </p>
      <div className="rating-summary">
        <div>
          <span>Ratings</span>
          <strong>4.7</strong>
        </div>
        <div className="rating-bars">
          {[95, 44, 12, 6, 8].map((width, index) => (
            <span key={index}>
              <i style={{ width: `${width}%` }} />
              <b>{5 - index} ★</b>
              <small>{[720, 120, 21, 12, 16][index]}</small>
            </span>
          ))}
        </div>
      </div>
      <h2>Individual Reviews:</h2>
      <div className="rating-filters">
        {[0, 5, 4, 3, 2, 1].map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => setRating(value)}
            className={rating === value ? "active" : ""}
          >
            {value ? `★ ${value}` : "All rating"}
          </button>
        ))}
      </div>
      {visible.length ? (
        visible.map(([name, stars, quote]) => (
          <article className="review-card" key={name}>
            <div className="review-person">
              <img src="/images/creator-avatar.png" alt="" />
              <div>
                <strong>{name}</strong>
                <small>UI/UX Designer</small>
              </div>
              <span>a year ago</span>
            </div>
            <div
              className="review-stars"
              aria-label={`${stars} out of 5 stars`}
            >
              {"★".repeat(stars)}
              {"☆".repeat(5 - stars)}
            </div>
            <p>{quote}</p>
          </article>
        ))
      ) : (
        <p>No reviews with this rating yet.</p>
      )}
    </div>
  );
}

export function CourseDetailPage({ slug }) {
  const course = courses.find(
    (item) =>
      item[0]
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") === slug,
  );
  const [tab, setTab] = useState("About");
  const [previewMessage, setPreviewMessage] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  if (!course) return <NotFoundPage />;
  const isDigital = slug === "build-digital-asset";
  async function share() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Link copied");
    } catch {
      setShareMessage("Copy this page URL to share");
    }
  }
  return (
    <>
      <section className="detail-top blue-grid">
        <Header />
        <div className="container">
          <div className="detail-heading">
            <div>
              <h1>
                {isDigital
                  ? "Build Digital Asset: A Comprehensive Guide"
                  : course[0]}
              </h1>
              <h2>Unlock the Power of Digital Creation with Expert Guidance</h2>
              <p>
                by <a href="/creators/purepearl-studio">purepearl studio</a>
              </p>
            </div>
            <button className="pill lime" onClick={share} type="button">
              ♧ &nbsp; Share
            </button>
          </div>
          {shareMessage ? (
            <span className="share-message" role="status">
              {shareMessage}
            </span>
          ) : null}
          <div className="detail-badges">
            <span>▥ &nbsp; Intermediate</span>
            <span>★ &nbsp; 4.8 (172 reviews)</span>
            <span>♧ &nbsp; 199 Students</span>
          </div>
          <button
            className="detail-preview"
            type="button"
            onClick={() =>
              setPreviewMessage(
                "Video preview is not available in this design demo.",
              )
            }
            aria-label="Play course preview"
          >
            <img
              src={
                isDigital
                  ? "/images/course-preview.png"
                  : `/images/${course[2]}`
              }
              alt="Course preview"
            />
          </button>
          {previewMessage ? (
            <p className="preview-message" role="status">
              {previewMessage}
            </p>
          ) : null}
        </div>
      </section>
      <div className="container detail-layout">
        <main className="detail-main">
          <div
            className="detail-tabs"
            role="tablist"
            aria-label="Course details"
          >
            {["About", "Lessons", "Reviews"].map((value) => (
              <button
                type="button"
                role="tab"
                aria-selected={tab === value}
                className={tab === value ? "active" : ""}
                key={value}
                onClick={() => setTab(value)}
              >
                {value}
              </button>
            ))}
          </div>
          {tab === "About" ? (
            <AboutTab />
          ) : tab === "Lessons" ? (
            <LessonsTab />
          ) : (
            <ReviewsTab />
          )}
        </main>
        <DetailSidebar />
      </div>
      <Footer />
    </>
  );
}

export function CreatorProfilePage() {
  const [following, setFollowing] = useState(false);
  const [sort, setSort] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [beginner, setBeginner] = useState(false);
  const [category, setCategory] = useState("Featured");
  const profileCourses = courses.filter(
    (course) => category === "Featured" || course[1] === category,
  );
  return (
    <>
      <section className="profile-hero blue-grid">
        <Header />
        <div className="container">
          <div className="profile-heading">
            <img src="/images/creator-avatar.png" alt="PurePearl Studio" />
            <div>
              <h1>
                PurePearl Studio <span>Creator</span>
              </h1>
              <p>Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="profile-description">
            Welcome to the creative world of PurePearl Studio. Here, you’ll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let’s explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="profile-bottom">
            <div>
              <span>
                <b>3</b> Products
              </span>
              <span>
                <b>{following ? 13 : 12}</b> Followers
              </span>
            </div>
            <button
              className="pill lime"
              type="button"
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>
      <main className="container profile-courses">
        <div className="catalog-toolbar">
          <div>
            <button type="button" onClick={() => setShowFilters(!showFilters)}>
              ▽ Filter
            </button>
            <button
              type="button"
              className={beginner ? "selected" : ""}
              onClick={() => setBeginner(!beginner)}
            >
              ▥ Level
            </button>
            <button type="button" onClick={() => setShowFilters(!showFilters)}>
              ♧ Category
            </button>
          </div>
          <button type="button" onClick={() => setSort(!sort)}>
            ☰ {sort ? "Newest first" : "Most relevant"}
          </button>
        </div>
        {showFilters ? (
          <div className="profile-filter-options">
            {["Featured", ...courses.map((course) => course[1])].map(
              (value) => (
                <button
                  className={`category-chip ${category === value ? "active" : ""}`}
                  type="button"
                  key={value}
                  onClick={() => setCategory(value)}
                >
                  {value}
                </button>
              ),
            )}
          </div>
        ) : null}
        {beginner ? (
          <p className="catalog-filter-note">
            Showing beginner-friendly courses
          </p>
        ) : null}
        <div className="course-grid">
          {(sort ? [...profileCourses].reverse() : profileCourses).map(
            (course) => (
              <CourseCard key={course[0]} course={course} />
            ),
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function NotFoundPage() {
  return (
    <>
      <section className="not-found blue-grid">
        <Header />
        <div className="container not-found-content">
          <strong>404</strong>
          <h1>
            The page you are looking
            <br />
            for doesn’t exist
          </h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <a className="pill lime" href="/">
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
