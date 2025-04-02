import { AboutMe } from "@/components/more/about-me";
import Footer from "@/components/footer";
import ImageGallery from "@/components/image-gallery";
import Navigation from "@/components/navigation";
import DashedLine from "@/components/ui/dashed-line";
import StaggerContainer from "@/components/ui/stagger-container";
import Hiking from "@/components/more/hiking";
import Github from "@/components/more/github";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center">
        <Navigation />
        <StaggerContainer className="flex flex-col gap-8 max-content-width">
          <DashedLine orientation="horizontal" className="w-full" />
          <ImageGallery />
          <DashedLine orientation="horizontal" className="w-full" />
          <AboutMe />
          <DashedLine orientation="horizontal" className="w-full" />
          <Hiking />
          <DashedLine orientation="horizontal" className="w-full" />
          <Github />
        </StaggerContainer>
      </div>
      <Footer />
    </div>
  );
}
