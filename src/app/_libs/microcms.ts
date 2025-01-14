import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";

export type NewsCategory = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  category: NewsCategory;
  date: string;
  content: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is requiired");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<NewsCategory>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};

export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: "news",
  });
  return listData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<NewsCategory>({
    endpoint: "categories",
  });
  return listData;
};
