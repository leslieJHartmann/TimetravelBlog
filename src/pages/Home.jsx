import { useEffect, useRef } from "react";
import Header from "../components/Header";
import BlogLayout from "../components/BlogLayout";
import Footer from "../components/Footer";
import "../styles/blog.css";
import "../styles/effects.css";

function Home() {
  const ambientRef = useRef(null);

  // low volume ambient sound
  useEffect(() => {
    const audio = new Audio("/sfx/ambientLoop.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    ambientRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <BlogLayout />
        <Footer />
      </div>
    </>
  );
}

export default Home;
