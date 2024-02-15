import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />  
      <About />
      <Services />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
    
  )
}
