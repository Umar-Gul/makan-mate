import Hero from "../components/Hero";
import BrowseMenu from "../components/BrowseMenu";
import AboutInfo from "../components/AboutInfo";
import Services from "../components/Services";
import DeliveryFeatures from "../components/DeliveryFeatures";
import Testimonials from "../components/Testimonials";
import BlogArticles from "../components/BlogArticles";
// import footer from "../components/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <BrowseMenu />
      <AboutInfo />
      <Services />
      <DeliveryFeatures />
      <Testimonials />
      <BlogArticles />
        
    </>
  );
}