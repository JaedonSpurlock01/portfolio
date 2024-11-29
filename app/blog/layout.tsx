import Comments from "@/components/comments";
import Footer from "@/components/footer";
import BlogInfo from "@/components/markdown/blog-info";
import Navigation from "@/components/navigation";
import DashedLine from "@/components/ui/dashed-line";
import { getBlogBySlug } from "@/lib/get-blogs";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = headers().get("x-next-blog-slug") as string;
  const blog = await getBlogBySlug(slug);
  const { metadata } = blog;
  const image = metadata.image;

  return (
    <div className="font-[family-name:var(--font-geist-sans)] page-layout h-full justify-between">
      <div className="flex flex-col h-full items-center gap-8">
        <Navigation />
        <DashedLine orientation="horizontal" className="max-content-width" />
        <article className="max-content-width flex flex-col gap-8">
          {image && (
            <div className="flex max-h-[60vh] justify-center">
              <Image
                src={image}
                alt={String(metadata.title)}
                width={1200}
                height={630}
                className="rounded-md object-scale-down"
              />
            </div>
          )}
          <BlogInfo blog={blog} />
          <DashedLine orientation="horizontal" />
          <div className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-a:no-underline prose-headings:text-xl prose-p:text-secondary max-w-none">
            {children}
          </div>
        </article>
        <Comments />
      </div>
      <Footer />
    </div>
  );
}
