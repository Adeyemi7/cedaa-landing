import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TopProducts from "./components/TopProducts";
import StorySection from "./components/StorySection";
import WhyChoose from "./components/WhyChoose";
import CoreValues from "./components/CoreValues";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className=" bg-[#FFFFFF] overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <TopProducts />
      <StorySection />
      <WhyChoose />
      <CoreValues />
      <ContactSection />
      <Footer />
    </main>
  );
}
