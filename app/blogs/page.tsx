import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Posts from "@/components/posts";
import DashedLine from "@/components/ui/dashed-line";
import StaggerContainer from "@/components/ui/stagger-container";

export default function Blog() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center">
        <Navigation />
        <StaggerContainer className="flex flex-col gap-8 max-content-width">
          <DashedLine orientation="horizontal" className="w-full" />
          <Posts />
        </StaggerContainer>
      </div>

      <Footer />
    </div>
  );
}
