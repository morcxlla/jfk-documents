import { getBlogPosts } from "app/documents/utils";

export const baseUrl = "https://jfk.mcx.rocks";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/documents/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/documents"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
