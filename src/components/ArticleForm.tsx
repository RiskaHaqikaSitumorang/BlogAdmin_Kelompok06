import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Article {
  _id?: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  status: "published" | "draft";
}

interface ArticleFormProps {
  onSubmit: (article: Article) => void;
  onCancel: () => void;
  initialData?: Article;
}

const ArticleForm = ({ onSubmit, onCancel, initialData }: ArticleFormProps) => {
  const [formData, setFormData] = useState<Article>({
    _id: initialData?._id,
    title: initialData?.title || "",
    content: initialData?.content || "",
    excerpt: initialData?.excerpt || "",
    image: initialData?.image || "",
    category: initialData?.category || "",
    author: initialData?.author || "",
    readTime: initialData?.readTime || "",
    status: initialData?.status || "published",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">
        {initialData ? "Edit Artikel" : "Tambah Artikel"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-white">
            Judul
          </Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="content" className="text-white">
            Konten
          </Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            rows={10}
            required
          />
        </div>
        <div>
          <Label htmlFor="excerpt" className="text-white">
            Excerpt
          </Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            rows={3}
            required
          />
        </div>
        <div>
          <Label htmlFor="image" className="text-white">
            URL Gambar
          </Label>
          <Input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="category" className="text-white">
            Kategori
          </Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="author" className="text-white">
            Penulis
          </Label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="readTime" className="text-white">
            Waktu Baca
          </Label>
          <Input
            id="readTime"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white"
            required
          />
        </div>
        <div>
          <Label htmlFor="status" className="text-white">
            Status
          </Label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-md border-white/20 text-white w-full p-2 rounded"
            required
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div className="flex gap-4">
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
          >
            {initialData ? "Perbarui" : "Tambah"}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white border border-purple-500"
          >
            Batal
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ArticleForm;
