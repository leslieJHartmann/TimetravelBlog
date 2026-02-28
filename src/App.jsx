import Header from "./components/Header";
import BlogLayout from "./components/BlogLayout";
import Footer from "./components/Footer";
import "./styles/blog.css";
import "./styles/effects.css";

function App() {
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

export default App;
