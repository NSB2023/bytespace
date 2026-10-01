import { useState } from "react";
import { courses } from "./data";
import { Logo, CourseCard } from "./components";

function AuthArtwork() {
  return (
    <div className="auth-artwork" aria-label="Featured ByteSpace courses">
      <div className="auth-course auth-course-back">
        <CourseCard course={courses[1]} />
      </div>
      <div className="auth-course auth-course-front">
        <CourseCard course={courses[2]} />
      </div>
      <span className="auth-ring" aria-hidden="true" />
      <span className="auth-triangle" aria-hidden="true" />
      <span className="auth-squiggle" aria-hidden="true">
        〰
      </span>
      <div className="auth-students">
        <strong>Happy Students</strong>
        <small>4.5 (240) ⭐</small>
        <span>
          👩🏻 👨🏽 👩🏾 👨🏻 <b>2K+</b>
        </span>
      </div>
    </div>
  );
}

export function AuthPage({ signup }) {
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
          <AuthArtwork />
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
          {!signup ? (
            <div className="auth-social">
              <span>or</span>
              <div>
                <button
                  type="button"
                  aria-label="Facebook sign in"
                  onClick={() =>
                    setMessage(
                      "Social sign in needs an authentication service.",
                    )
                  }
                >
                  f
                </button>
                <button
                  type="button"
                  aria-label="Google sign in"
                  onClick={() =>
                    setMessage(
                      "Social sign in needs an authentication service.",
                    )
                  }
                >
                  G
                </button>
              </div>
            </div>
          ) : null}
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
