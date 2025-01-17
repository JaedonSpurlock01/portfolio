import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  images: {
    domains: ["avatar.iran.liara.run"]
  }
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeSlug, [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        properties: {
          className: ["subheading-anchor"],
          ariaLabel: "Link to section",
        },
      },
    ],],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
