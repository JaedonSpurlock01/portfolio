import { AboutMe } from "@/components/more/about-me";
import Footer from "@/components/footer";
import ImageGallery from "@/components/image-gallery";
import Navigation from "@/components/navigation";
import DashedLine from "@/components/ui/dashed-line";
import StaggerContainer from "@/components/ui/stagger-container";
import Playground from "@/components/playground";
import DreamJournaling from "@/components/dream-journaling";
import Climbing from "@/components/more/climbing";
import Hiking from "@/components/more/hiking";
import Github from "@/components/more/github";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Backpack, Book, Mountain } from "lucide-react";

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

          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="flex w-full gap-2"
          >
            <TabsList className="flex-col rounded-none border-l h-full border-border bg-transparent p-0">
              <TabsTrigger
                value="tab-1"
                className="text-base relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                Hiking
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="text-base relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                Climbing
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="text-base relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                Journal
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="text-base relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
              >
                Implants
              </TabsTrigger>
            </TabsList>
            <div className="grow rounded-lg">
              <TabsContent value="tab-1">
                <Hiking />
              </TabsContent>
              <TabsContent value="tab-2">
                <p className="px-4 py-1.5 text-xs text-muted-foreground">
                  Content for Tab 2
                </p>
              </TabsContent>
              <TabsContent value="tab-3">
                <p className="px-4 py-1.5 text-xs text-muted-foreground">
                  Content for Tab 3
                </p>
              </TabsContent>
              <TabsContent value="tab-4">
                <p className="px-4 py-1.5 text-xs text-muted-foreground">
                  Content for Tab 4
                </p>
              </TabsContent>
            </div>
          </Tabs>

          <DashedLine orientation="horizontal" className="w-full" />

          <Github />
        </StaggerContainer>
      </div>
      <Footer />
    </div>
  );
}
