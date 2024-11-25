import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import RecentPosts from "@/components/recent-posts";
import DashedLine from "@/components/ui/dashed-line";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center gap-8">
        <div>
          <Navigation />
          <Header />
        </div>
        <DashedLine orientation="horizontal" className="max-content-width" />
        <Experience />
        <DashedLine orientation="horizontal" className="max-content-width" />
        <Education />
        <DashedLine orientation="horizontal" className="max-content-width" />
        <Projects />
        <DashedLine orientation="horizontal" className="max-content-width" />
        <RecentPosts />
      </div>

      <Footer />
    </div>
  );
}
