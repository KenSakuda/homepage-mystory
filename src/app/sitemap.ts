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
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.category.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/news/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );
  const columnUrls: MetadataRoute.Sitemap = columnContents.map((content) => ({
    url: buildUrl(`/column/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/consulting"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/tools"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/research"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/pricing"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/share-prediction"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/people-analytics"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/image-recognition"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics/ai-agent"),
      lastModified: now,
    },
    {
      url: buildUrl("/media"),
      lastModified: now,
    },
    {
      url: buildUrl("/healthcare"),
      lastModified: now,
    },
    {
      url: buildUrl("/blockchain"),
      lastModified: now,
    },
    {
      url: buildUrl("/strength"),
      lastModified: now,
    },
    {
      url: buildUrl("/case-studies"),
      lastModified: now,
    },
    {
      url: buildUrl("/company"),
      lastModified: now,
    },
    {
      url: buildUrl("/company/code-of-conduct"),
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
      url: buildUrl("/movie"),
      lastModified: now,
    },
    {
      url: buildUrl("/whitepaper"),
      lastModified: now,
    },
    {
      url: buildUrl("/analytics-data"),
      lastModified: now,
    },
    {
      url: buildUrl("/privacypolicy"),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
    ...columnUrls,
  ];
}
