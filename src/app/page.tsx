import HeroSection from "@/components/Home/HeroSection";
import TestimonialsSection from "@/components/Home/Testimonials";
import TransitionSection from "@/components/Home/TransitionSection";
import ProductGallery from "@/components/Product/ProductGallery";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransitionSection />
      <ProductGallery />
      <TestimonialsSection />
    </main>
  );
}
