import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Posts from "@/components/posts";
import Projects from "@/components/projects";
import DashedLine from "@/components/ui/dashed-line";
import StaggerContainer from "@/components/ui/stagger-container";
import Photos from "@/components/photos";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center">
        <Navigation />
        <StaggerContainer className="flex flex-col gap-8">
          <Header />
          <DashedLine orientation="horizontal" className="max-content-width" />
          <Experience />
          <DashedLine orientation="horizontal" className="max-content-width" />
          <Education />
          <DashedLine orientation="horizontal" className="max-content-width" />
          <Projects />
          <DashedLine orientation="horizontal" className="max-content-width" />
          <Photos />
          <DashedLine orientation="horizontal" className="max-content-width" />
          <Posts getLatestBlogs={true} />
        </StaggerContainer>
      </div>

      <Footer />
    </div>
  );
}
