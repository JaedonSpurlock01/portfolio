import { AboutMe } from "@/components/more/about-me";
import Footer from "@/components/footer";
import ImageGallery from "@/components/image-gallery";
import Navigation from "@/components/navigation";
import DashedLine from "@/components/ui/dashed-line";
import StaggerContainer from "@/components/ui/stagger-container";
import Hiking from "@/components/more/hiking";
import { Cochlear } from "@/components/more/cochlear";

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

          {/* <Tabs defaultValue="tab-1">
            <TabsList className="h-auto rounded-none border-b border-border bg-transparent p-0">
              <TabsTrigger
                value="tab-1"
                className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                <Book
                  className="mb-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Dream
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                <Mountain
                  className="mb-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Climbing
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="relative flex-col rounded-none px-4 py-2 text-xs after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                <Backpack
                  className="mb-1.5 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Hiking
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">
              <DreamJournaling />
            </TabsContent>
            <TabsContent value="tab-2">
              <Climbing />
            </TabsContent>
            <TabsContent value="tab-3">
              <Hiking />
            </TabsContent>
          </Tabs> */}

          <Hiking />
          <Cochlear />

          {/* <DashedLine orientation="horizontal" className="w-full" />

          <Github /> */}
        </StaggerContainer>
      </div>
      <Footer />
    </div>
  );
}
