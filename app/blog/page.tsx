import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Posts from "@/components/posts";
import DashedLine from "@/components/ui/dashed-line";

export default function Blog() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center gap-8">
        <Navigation />
        <DashedLine orientation="horizontal" className="max-content-width" />
        <Posts />
      </div>

      <Footer />
    </div>
  );
}
