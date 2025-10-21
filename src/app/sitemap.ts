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
      url: buildUrl("/services/analytics/consulting"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/analytics/tools"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/analytics/research"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/analytics/pricing"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/analytics/share-prediction"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/analytics/people-analytics"),
      lastModified: now,
    },

    {
      url: buildUrl("/services/analytics/ai-agent"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/media"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/healthcare"),
      lastModified: now,
    },
    {
      url: buildUrl("/services/blockchain"),
      lastModified: now,
    },
    {
      url: buildUrl("/feature/strength"),
      lastModified: now,
    },
    {
      url: buildUrl("/feature/strength"),
      lastModified: now,
    },
    {
      url: buildUrl("/feature/case-studies"),
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
      url: buildUrl("/data/whitepaper"),
      lastModified: now,
    },
    {
      url: buildUrl("/data/analytics-data"),
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
