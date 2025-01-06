import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import Services from "@/app/components/Services";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import '@/styles/index.css';

export default function Home() {

  return (
    <>
    <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services/>
            <Portfolio />
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
    </div>
    </>
  );
}