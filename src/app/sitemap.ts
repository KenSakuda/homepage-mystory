import { MetadataRoute } from "next";
import {
  getAllCategoryList,
  getAllNewsList,
  getAllcolumnList,
} from "./_libs/microcms";

const buildUrl = (path?: string) => `https://www.b-mystory.com${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();
  const columnContents = await getAllcolumnList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl("/news/${content.id}"),
    lastModified: content.category.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl("/news/category/${content.id}"),
      lastModified: content.revisedAt,
    })
  );
  const columnUrls: MetadataRoute.Sitemap = columnContents.map((content) => ({
    url: buildUrl("/column/${content.id}"),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/services"),
      lastModified: now,
    },
    {
      url: buildUrl("/news"),
      lastModified: now,
    },
    {
      url: buildUrl("/recruit"),
      lastModified: now,
    },
    {
      url: buildUrl("/column"),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("privacypolicy"),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
    ...columnUrls,
  ];
}
