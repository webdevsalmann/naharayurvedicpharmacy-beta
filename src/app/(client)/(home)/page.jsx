import Hero from "./Hero";
import Featured from "./Featured";
import About from "./About";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Contact from "@/components/shared/Contact";
import Benefits from "./Benefits";
import LatestProducts from "./LatestProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Benefits />
      <LatestProducts />
      {/* <About /> */}
      {/* <FAQ /> */}
      <Testimonial />
      <Contact />
    </main>
  );
}
