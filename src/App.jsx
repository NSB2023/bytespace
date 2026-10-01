import { useState } from "react";
import {
  Hero,
  Courses,
  LearningPaths,
  Growth,
  Creator,
  Testimonials,
} from "./Landing";
import { Footer } from "./components";
import { AuthPage } from "./Auth";
import {
  CatalogPage,
  CourseDetailPage,
  CreatorProfilePage,
  NotFoundPage,
} from "./Pages";
import "./App.css";
import "./Pages.css";

function App() {
  const [search, setSearch] = useState("");
  const pathname = window.location.pathname;
  if (pathname === "/login" || pathname === "/signup")
    return <AuthPage signup={pathname === "/signup"} />;
  if (pathname === "/courses") return <CatalogPage />;
  if (pathname.startsWith("/courses/"))
    return <CourseDetailPage slug={pathname.split("/")[2]} />;
  if (pathname === "/creators/purepearl-studio") return <CreatorProfilePage />;
  if (pathname !== "/") return <NotFoundPage />;
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
