import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface ArticleListProps {
  articles: any[];
  onEdit: (article: any) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

const ArticleList = ({ articles, onEdit, onDelete, onAdd }: ArticleListProps) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Daftar Artikel</h2>
        <Button
          onClick={onAdd}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
        >
          Tambah Artikel
        </Button>
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center justify-between"
          >
            <div>
              <h3 className="text-white font-medium">{article.title}</h3>
              <p className="text-gray-400 text-sm">
                {article.author} •{" "}
                {new Date(article.date).toLocaleDateString("id-ID")}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                onClick={() => onEdit(article)}
                className="text-blue-400 border border-blue-400 hover:bg-white hover:text-blue-600 hover:border-blue-600"
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Button>
              <Button
                variant="ghost"
                onClick={() => onDelete(article._id)}
                className="text-red-400 border border-red-400 hover:bg-white hover:text-red-600 hover:border-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" /> Hapus
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ArticleList;
