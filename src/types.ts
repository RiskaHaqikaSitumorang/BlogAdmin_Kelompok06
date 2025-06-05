export interface Article {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  status: "published" | "draft";
  date: string;
  views: number;
}